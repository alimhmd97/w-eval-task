import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import styles from './footer.module.css'

export  function Footer() {
  return (
    <footer className={styles.footer}>
    <div className='d-flex gap-2 mx-auto'>Contact us at <div><FacebookIcon className='mx-2' /><YouTubeIcon className='mx-2' /><InstagramIcon className='mx-2' /></div></div>
  </footer>
  )
}
