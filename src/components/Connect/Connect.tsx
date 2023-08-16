import ContactForm from "./ContactForm";
import LinkedIn from "../SocialMedia/LinkedIn";
import styles from "./ContactForm.module.css";
import Instagram from "../SocialMedia/Instagram";

const Connect = () => {
  return (
    <>
      <ContactForm />
      <section>
        <h2>Feel free to connect with me on these social media platforms.</h2>
        <div className={styles.socialMediaConnections}>
          <div className={styles.socialMediaConnection}>
            <LinkedIn size={3} />
          </div>
          <div className={styles.socialMediaConnection}>
            <Instagram size={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
