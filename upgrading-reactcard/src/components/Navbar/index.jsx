import styles from "./Navbar.module.css";
import Navitem from "./Navitem";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <h1>Nurul Izzah</h1>
      <div className={styles.navmenu}>
      <Navitem text="Home" href="/"/>
      <Navitem text="About" href="/#about"/>
      <Navitem text="Contact" href="/#contact"/>
      </div>
    </nav>
  );
};

export default Navbar;
