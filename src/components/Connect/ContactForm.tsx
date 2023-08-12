import styles from "./ContactForm.module.css";

interface Props {
  onSubmit: (changeContact: boolean) => void;
  changeContact: boolean;
}

const ContactForm = ({ onSubmit, changeContact }: Props) => {
  const submitForm = () => {
    onSubmit(true);
    console.log(changeContact);
  };
  return (
    <section className={styles.contactFormContainer}>
      <h1>
        If you would like to get ahold of me, please leave a message and I will
        get back to you.
      </h1>
      <form action="" className={styles.contactForm}>
        <div className={styles.small}>
          <div className={styles.contactItem + " " + styles.smallItem}>
            <label htmlFor="contactName" className={styles.formLabel}>
              Name:
            </label>
            <input type="text" className="contactName" />
          </div>
          <div className={styles.contactItem + " " + styles.smallItem}>
            <label htmlFor="contactEmail" className={styles.formLabel}>
              Email Address:
            </label>
            <input type="text" className="contactEmail" />
          </div>
        </div>
        <div className={styles.contactItem}>
          <label htmlFor="contactMessage" className={styles.formLabel}>
            Message:
          </label>
          <textarea className={styles.contactMessage} rows={4} />
        </div>
      </form>
      <div className="buttonDiv">
        <button onClick={submitForm} className={styles.submitButton}>
          Currently inoperable.
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
