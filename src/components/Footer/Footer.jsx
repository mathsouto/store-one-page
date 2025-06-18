import styles from "./footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.infoFooter}>
          <div className={styles.phoneFooter}>
            <div className={styles.iconWrapper}>
              <FaPhoneAlt size={20} />
            </div>
            <p>(XX) XXXX-XXXX</p>
          </div>
          <div className={styles.emailFooter}>
            <div className={styles.iconWrapper}>
              <FaEnvelope size={20} />
            </div>
            <p>email@email.com</p>
          </div>
          <div className={styles.addresFooter}>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt size={20} />
            </div>
            <p>
              R. Xxxx
              <br />
              <strong>Santa Ifigênia, São Paulo - SP</strong>
            </p>
          </div>
        </div>

        <div className={styles.socialsFooter}>
          <div>
            <p>LOGO</p>
          </div>
          <div className={styles.iconsFooter}>
            <div className={styles.iconWrapper}>
              <FaFacebook size={20} />
            </div>
            <div className={styles.iconWrapper}>
              <FaInstagram size={20} />
            </div>
            <div className={styles.iconWrapper}>
              <FaTiktok size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.rightsFooter}>
        <p>© 2025 Xxxx Xxxxx</p>
      </div>
    </footer>
  );
}

export default Footer;
