module.exports = async function(content) {
  const callback = this.async();
  console.log(444444, content);
  return callback(null, content);
}