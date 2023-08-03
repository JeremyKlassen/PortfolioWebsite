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
    <div className={styles.contactForm}>
      <form action="" className={styles.contactForm}>
        <div className={styles.contactItem}>
          <label htmlFor="contactName" className={styles.formLabel}>
            Name:
          </label>
          <input type="text" className="contactName" />
        </div>
        <div className={styles.contactItem}>
          <label htmlFor="contactEmail" className={styles.formLabel}>
            Email Address:
          </label>
          <input type="text" className="contactEmail" />
        </div>
        <div className={styles.contactItem}>
          <label htmlFor="contactMessage" className={styles.formLabel}>
            Message:
          </label>
          <input type="text" className="contactMessage" />
        </div>
      </form>
      <div className="buttonDiv">
        <button onClick={submitForm} className={styles.submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
