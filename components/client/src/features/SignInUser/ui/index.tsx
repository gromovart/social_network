import { Form, Input, Button, Checkbox, AutoComplete } from 'antd';
import tools from '../../../shared/lib';
import { useForm, Controller } from 'react-hook-form';

export const SignInUser = () => {
  const { control, handleSubmit } = useForm();
  const onFinish = (values: any) => {
    tools.logger.info(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    tools.logger.warn(errorInfo);
  };
  return (
    <Form
      style={{ width: '80%' }}
      onFinish={handleSubmit(onFinish)}
      onFinishFailed={onFinishFailed}
    >
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            // label="Логин"
            name={field.name}
            rules={[{ required: true, message: 'Введите логин!' }]}
          >
            <Input
              style={{ height: '60px' }}
              size="large"
              placeholder="Электронный адрес"
              {...field}
            />
          </Form.Item>
        )}
      />
      <Controller
        name="Password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            // label="Пароль"
            name={field.name}
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password
              style={{ height: '60px' }}
              size="large"
              placeholder="Ваш пароль"
              {...field}
            />
          </Form.Item>
        )}
      />
      {/* <Controller
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
      /> */}
      <Form.Item>
        <Button
          style={{
            width: '100%',
            height: '3rem',
            fontWeight: 600,
            fontSize: '18px',
            borderRadius: '6px',
          }}
          type="primary"
          size="large"
          htmlType="submit"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
