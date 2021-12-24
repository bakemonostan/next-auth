import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the homePage</h1>
      <br />
      <Link href='/login'>
        <a className={styles.link}>Log in</a>
      </Link>
      <br />
      <br />
      <Link href='/signup'>
        <a className={styles.link}>Sign up</a>
      </Link>
    </div>
  );
}
