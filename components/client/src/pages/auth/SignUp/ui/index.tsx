import { Layout } from 'antd'; // ~ "shared/ui/{...}"
import { reflect } from '@effector/reflect';

import { SignUpUser } from '../../../../features/SignUpUser';
import styles from './styles.module.scss';

type Props = import('react-router-dom').RouteChildrenProps<{
  userId: string;
}> & {
  isLoading: boolean;
};

const View = ({ match, isLoading }: Props) => {
  const userId = Number(match?.params.userId);
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
        <SignUpUser />
      </Layout.Content>
    </Layout>
  );
};

// Использование effector-reflect здесь опционально и некритично в рамках методологии
const SignUpPage = reflect({
  view: View,
  bind: {
    isLoading: false,
  },
});

export default SignUpPage;
