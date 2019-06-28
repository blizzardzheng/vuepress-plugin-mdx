const { fs, path, globby } = require('@vuepress/shared-utils');
const createMdxInVue = require('./tpl/mdxinvue');
const watch = require('glob-watcher');
const chalk = require('chalk');
const getRemark = require('./utils/getRemark');
const vfile = require('to-vfile');


async function generateMDFiles(dir) {
  const option = await getRemark(vfile.readSync(dir, 'utf-8'));
  const wrapperedContent = createMdxInVue(option.name, dir);
  const targetDir = dir.replace('.mdx', '.md');
  fs.writeFileSync(targetDir, wrapperedContent);
  console.log(chalk.green(`[hint:mdx] ${targetDir} has changed, markdown is generated`));
}

async function resolveComponents (componentDir) {
  if (!fs.existsSync(componentDir)) {
    return
  }
  const components = await globby(['**/*.mdx'], { cwd: componentDir });
  components.forEach((file) => {
    const targetFilePath = path.resolve(componentDir, file);
    generateMDFiles(targetFilePath);
  })
}

module.exports = (options, ctx) => {
  return {
     chainWebpack: require('./lib/webpack'),
     extendPageData: require('./lib/extendPageData'),
     less: {
      javascriptEnabled: true
     },
     extendCli(cli) {
       cli
        .command('mdx [targetDir]', '')
        .option('--dev', 'display info in dev mode')
        .action(async (dir = '.') => {
          console.log('Display info of your website', dir, cli.options.dev);
          if (cli.options.dev) {
            const watcher = watch([path.resolve(process.cwd(), dir, '**/*.mdx')]);
            watcher.on('add', generateMDFiles);
            watcher.on('change', generateMDFiles);
            watcher.on('unlink', path => {
              const mdPath = path.replace('.mdx', '.md');
              fs.removeSync(mdPath);
              console.log(chalk.green(`[hint:mdx] ${path} has unlink, markdown is deleted`));
            });
          } else {
            await resolveComponents(dir);
          }
        })
     }
  }
}