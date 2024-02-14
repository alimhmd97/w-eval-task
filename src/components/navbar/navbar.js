import styles from './navbar.module.css'

export  function Navbar() {
  return (

    <div className={styles.topnav} id="myTopnav">
      <span className={styles.active}>Home</span>
      <span>News</span>
      <span>Contact</span>
      <span>About</span>
      <span className={styles.icon} >
        <i>ccc</i>
      </span>
    </div>
  )
}
