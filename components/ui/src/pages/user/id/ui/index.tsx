import { Layout } from 'antd'; // ~ "shared/ui/{...}"
import { reflect } from '@effector/reflect';

import styles from './styles.module.scss';

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
      <Layout.Content className={styles.content}>
        <div>UserPage</div>
      </Layout.Content>
    </Layout>
  );
};

// Использование effector-reflect здесь опционально и некритично в рамках методологии
const UserPage = reflect({
  view: View,
  bind: {
    isLoading: false,
  },
});

export default UserPage;
