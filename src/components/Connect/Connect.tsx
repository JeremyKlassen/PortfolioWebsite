import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Submitted from "./Submitted";
import LinkedIn from "../SocialMedia/LinkedIn";
import styles from "./ContactForm.module.css";
import Instagram from "../SocialMedia/Instagram";

const Connect = () => {
  const [contactFormState, setContactFormState] = useState(false);

  useEffect(() => {
    setContactFormState(false);
  }, []);

  const onSubmit = (newContactState: boolean) => {
    setContactFormState(newContactState);
  };

  return (
    <>
      <section>
        <h1>Feel free to connect with me on these social media platforms.</h1>
        <div className={styles.socialMediaConnections}>
          <div className={styles.socialMediaConnection}>
            <LinkedIn size={3} />
          </div>
          <div className={styles.socialMediaConnection}>
            <Instagram size={3} />
          </div>
        </div>
      </section>
      {contactFormState ? (
        <Submitted />
      ) : (
        <ContactForm onSubmit={onSubmit} changeContact={contactFormState} />
      )}
    </>
  );
};

export default Connect;
