import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactFormContainer}>
      <h1>
        If you would like to get ahold of me, please leave a message and I will
        get back to you.
      </h1>
      <form
        action="https://formsubmit.co/b1155fe82ce3ab72deef1b0dd9c0ee30"
        method="POST"
        className={styles.contactForm}
      >
        <div className={styles.small}>
          <div className={styles.contactItem + " " + styles.smallItem}>
            <label htmlFor="contactName" className={styles.formLabel}>
              Name:
            </label>
            <input type="text" name="name" className="contactName" />
          </div>
          <div className={styles.contactItem + " " + styles.smallItem}>
            <label htmlFor="contactEmail" className={styles.formLabel}>
              Email Address:
            </label>
            <input type="email" name="email" className="contactEmail" />
          </div>
        </div>
        <div className={styles.contactMessageDiv}>
          <label htmlFor="contactMessage" className={styles.formLabel}>
            Message:
          </label>
          <textarea
            name="contactMessage"
            className={styles.contactMessage}
            rows={4}
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="http://www.laklassen.com/Thanks"
        />
        <div className="buttonDiv">
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
