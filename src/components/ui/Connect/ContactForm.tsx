import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactFormContainer} id="contact">
      <h2>Tell me your story! </h2>
      <h3>
        Send me an email at{" "}
        <a href={`mailto:klassendata@gmail.com`}>klassendata@gmail.com</a> or
        leave a message with your Contact information below. I will get back to
        you soon.
      </h3>
      <form
        action="https://formsubmit.co/klassendata@gmail.com"
        method="POST"
        className={styles.contactForm}
      >
        <div className={styles.nameContainer}>
          <label htmlFor="contactName" className={styles.formLabel}>
            Name:
          </label>
          <input type="text" name="name" className={styles.contactName} />
        </div>
        <div className={styles.emailContainer}>
          <label htmlFor="contactEmail" className={styles.formLabel}>
            Email Address:
          </label>
          <input type="email" name="email" className={styles.contactEmail} />
        </div>
        <div className={styles.messageContainer}>
          <label htmlFor="contactMessage" className={styles.formLabel}>
            Message:
          </label>
          <textarea
            name="contactMessage"
            className={styles.contactMessage}
            rows={10}
          />
        </div>
        <input
          type="hidden"
          name="_next"
          value="http://www.laklassen.com/Thanks"
        />
        <div className={styles.buttonDiv}>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
