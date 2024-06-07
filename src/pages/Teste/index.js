import { useState } from 'react';
import styles from './Teste.module.css';
import { Button, Card, Checkbox, Form, Input } from 'antd';

const tabList = [
  {
    key: 'tab1',
    label: 'teste1'
  },
  {
    key: 'tab2',
    label: 'teste2'
  }
]

const contentList = {
  tab1: <h1>Hello, World!</h1>,
  tab2: <h2>I am Alive!</h2>
}

const onFinish = (values) => {
  console.log('Sucess', values);
};

const onFinishFail = (values) => {
  console.log('Failed', values);
};

function Teste() {

  const[activeTabKey1, setActiveTabKey1] = useState('tab1')
  const[activeTabKey2, setActiveTabKey2] = useState('tab2')

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  }
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  }

  return (
    <div className={styles.teste}>
      <h1>Formulário de testes!</h1>
      <Form
        name="Teste"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFail}
        style={{ maxWidth: 800 }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Nome de usuário.',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Insira sua Senha!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me!</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Card className={styles.container}
        style={{
          width: '100%',
        }}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
        tabProps={{
          size:'middle',
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </div>
  );
}

export default Teste;
