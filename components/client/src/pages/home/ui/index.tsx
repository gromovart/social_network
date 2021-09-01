import { reflect } from '@effector/reflect';
import { lazy } from 'react';
import { Layout } from 'antd';
import styles from './styles.module.scss';
import Button from '../../../shared/ui/Button/ui';
import { routesNames } from '../../../shared/constants';

const Menu = lazy(() => import('../../../shared/ui/Menu'));

type Props = import('react-router-dom').RouteChildrenProps<{
  taskId: string;
}> & {
  isLoading: boolean;
};

const View = ({ match, isLoading }: Props) => {
  const taskId = Number(match?.params.taskId);
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
      <Menu>
        <Button url={routesNames.SIGN_UP_PAGE_PATH} title="Регистрация" />
        <Button url={routesNames.SIGN_IN_PAGE_PATH} title="Войти" />
      </Menu>
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
