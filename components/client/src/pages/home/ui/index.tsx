import { reflect } from '@effector/reflect';
import { lazy } from 'react';
import { Button, Layout } from 'antd';
import styles from './styles.module.sass';
import logo from './../../../shared/assets/images/logo.png';
import { SignInUser } from '../../../features/SignInUser/ui';
const Menu = lazy(() => import('../../../shared/ui/Menu'));

type Props = import('react-router-dom').RouteChildrenProps<{
  taskId: string;
}> & {
  isLoading: boolean;
};

const View = ({ match, isLoading }: Props) => {
  // const taskId = Number(match?.params.taskId);
  // const task = taskModel.selectors.useTask(taskId);

  // useEffect(() => {
  //   taskModel.effects.getTaskByIdFx({ taskId });
  // }, [taskId]);

  // Можно часть логики перенести в entity/task/card (как контейнер)
  // if (!task && !isLoading) {
  //   return (
  //     <Result
  //       status="404"
  //       title="404"
  //       subTitle="Task was not found"
  //       extra={
  //         <Link to="/">
  //           <Button type="primary">Back to tasks list {taskId}</Button>
  //         </Link>
  //       }
  //     />
  //   );
  // }

  return (
    <Layout className={styles.root}>
      <div className={styles['content']}>
        <div className={styles['content-sidebar-left']}>
          <div className={styles['content-sidebar-left-image-container']}>
            {/* <img
              className={styles['content-sidebar-left-image-container-image']}
              alt="image1"
              src={logo}
            ></img> */}
            <div
              className={styles['content-sidebar-left-image-container-image']}
            ></div>
          </div>
          <h2>
            SocialNetwork помогает вам всегда оставаться на связи и общаться со
            своими знакомыми.
          </h2>
        </div>
        <div className={styles['content-sidebar-right']}>
          <div className={styles['content-sidebar-right-form-wrapper']}>
            <SignInUser />
            <div
              className={styles['content-sidebar-right-form-wrapper-line']}
            ></div>
            <Button
              type="primary"
              style={{
                background: '#42b72a',
                borderRadius: '6px',
                height: '3.5rem',
                fontWeight: 600,
                fontSize: '18px',
              }}
              size="large"
            >
              Создать аккаунт
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Использование effector-reflect здесь опционально и некритично в рамках методологии
const HomePage = reflect({
  view: View,
  bind: {
    isLoading: false,
  },
});

export default HomePage;
