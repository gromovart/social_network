import { Form, Input, Button, Checkbox } from 'antd';
import tools from '../../../shared/lib';
import { useForm, Controller } from 'react-hook-form';

export const SignInUser = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const onFinish = (values: any) => {
    tools.logger.info(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    tools.logger.warn(errorInfo);
  };
  return (
    <Form onFinish={handleSubmit(onFinish)} onFinishFailed={onFinishFailed}>
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Логин"
            name={field.name}
            rules={[{ required: true, message: 'Please input your login!' }]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="Password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Пароль"
            name={field.name}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="remember"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <Form.Item
            name={field.name}
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox {...field}>Запомнить</Checkbox>
          </Form.Item>
        )}
      />
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
