---
home: true
heroImage: https://intranetproxy.alipay.com/skylark/lark/0/2019/png/97/1561727686757-190dbcd9-bf46-4676-bb62-df473007a85c.png
tagline: 高效的流程组件库 with 丰富的业务模板
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 😺 高效
  details:  业务流程都使用申明式即可表达，高效完成业务流程。
- title: 🐷 丰富
  details: 根据业务线提供丰富的模板，贴合业务，拿来即用。
- title: 🐵 灵活
  details: 满足不同的业务需求，非自定义接口，使用 antd 组件属性方便使用
footer: Made by 🌻 with ❤️
---


### 安装
```
tnpm install @sunflower-antd/form-table --save
```

### 使用
```jsx
import { useFormTable } from '@sunflower-antd/form-table';

function Component() {
  const { Form, Table } = useFormTable({
    search() {
      return {
        list: [{ username: 'lily' }],
        total: 1,
      }
    } 
  });
  return <>
    <Form>
      <Form.Item
        label="用户名"
        name="username"
      >
        <Input />
      </Form.Item>
    </Form>
    
    <Table columns={[{
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }]} />
  </>;
}

ReactDOM.render(<Component />, mountNode);
```