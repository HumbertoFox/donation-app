import styles from './page.module.css';
import { LoginPage } from './pages/login';

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginPage />
    </main>
  );
};