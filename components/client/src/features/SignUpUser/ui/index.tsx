import { Form, Input, Button, DatePicker } from 'antd';
import tools from '../../../shared/lib';
import { useForm, Controller } from 'react-hook-form';

export const SignUpUser = () => {
  const { control, handleSubmit, setValue } = useForm();
  const onFinish = (values: any) => {
    tools.logger.info(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    tools.logger.warn(errorInfo);
  };

  return (
    <Form onFinish={handleSubmit(onFinish)} onFinishFailed={onFinishFailed}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            name={field.name}
            label="Имя"
            rules={[
              { required: true, message: 'Пожалуйста укажите ваше имя!' },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Фамилия"
            name={field.name}
            rules={[
              { required: true, message: 'Пожалуйста укажите вашу фамилию!' },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="dateBirthday"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <Form.Item
              label="Дата рождения"
              name={field.name}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста укажите вашу дату рождения!',
                },
              ]}
            >
              <DatePicker
                placeholder={'2021-09-01'}
                onChange={(date: any, dateString: string) => {
                  setValue('dateBirthday', dateString);
                }}
              />
            </Form.Item>
          );
        }}
      />
      <Controller
        name="login"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Логин"
            name={field.name}
            rules={[
              { required: true, message: 'Пожалуйста укажите ваш E-mail!' },
            ]}
          >
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Пароль"
            name={field.name}
            rules={[{ required: true, message: 'Пожалуйста укажите пароль!' }]}
          >
            <Input.Password {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item
            label="Повторите пароль"
            name={field.name}
            rules={[
              { required: true, message: 'Пожалуйста подтвердите пароль!' },
            ]}
          >
            <Input.Password {...field} />
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
