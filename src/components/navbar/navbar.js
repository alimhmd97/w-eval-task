
"use client"
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation'
import { signOut } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import {logout} from "../../store/auth-slice"

const Navbar = () => {
  const pathname = usePathname()
  const dispatch=useDispatch()

  const user = useSelector(state => state.auth.user);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout())
      router.push('/')
    }).catch((error) => {
      console.log(error);
    });
  };

  const renderAuthLinks = () => {
    if (user) {
      return <div className={`${styles.logoutBtn}`} onClick={handleLogout}>Logout</div>;
    } else {
      return (
        <div style={{ width: '15%' }}
          className='d-flex  
        justify-content-between ms-md-auto flex-column
         flex-md-row align-items-center'
        >
          <Link href="/login" className={styles.btn}>
            Login
          </Link>
          <Link href="/register" className={styles.btn}>Register
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        {pathname === '/' ? <> <li>
          <Link href="#hero">
            Hero
          </Link>
        </li>
          <li>
            <Link href="#features">
              Features
            </Link>
          </li>
          <li>
            <Link href="#testimonials">
              Testimonials
            </Link>
          </li></> :
          <li>
            <Link href="/">
              Home
            </Link>
          </li>}
        {renderAuthLinks()}
      </ul>
    </nav>
  );
};

export { Navbar };
