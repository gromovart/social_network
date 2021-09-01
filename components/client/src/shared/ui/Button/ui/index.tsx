import styles from './styles.module.sass';

type Props = {
  title: string;
  url: string;
};

const Button = ({ title, url }: Props) => {
  return (
    <a href={url} className={styles.btn}>
      {title}
    </a>
  );
};

export default Button;
