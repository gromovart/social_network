import styles from './styles.module.sass';
import spinnerGif from './../lib/assets/images/loading_1.gif';
import { Layout } from 'antd';

type Props = {
  spinnerData?: string;
};

const Spinner = ({ spinnerData }: Props) => {
  return (
    <Layout className={styles.container}>
      <div className={styles.spinner}>
        <img className={styles.image} src={spinnerGif} alt="this is car" />
      </div>
    </Layout>
  );
};

export default Spinner;
