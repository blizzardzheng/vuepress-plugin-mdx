# 使用

## 怎么使用

在业务栏目里找到需要的模板，之后安装依赖，复制模板到应用中使用。比如使用 `@sunflower-antd/form-table`

先安装依赖
```
tnpm install @sunflower-antd/form-table --save
```

## 示例

之后复制模板到应用中，比如 `src/page/IndexPage/index.js`
```jsx
import { useFormTable } from '@sunflower-antd/form-table';

export default function Component() {
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


```