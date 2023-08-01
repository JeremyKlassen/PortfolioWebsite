import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Submitted from "./Submitted";

const Contact = () => {
  const [contactFormState, setContactFormState] = useState(false);

  useEffect(() => {
    setContactFormState(false);
  }, []);

  const onSubmit = (newContactState: boolean) => {
    setContactFormState(newContactState);
  };

  return (
    <>
      <h1>
        If you would like to get ahold of me, please leave a message and I will
        get back to you.
      </h1>
      {contactFormState ? (
        <Submitted />
      ) : (
        <ContactForm onSubmit={onSubmit} changeContact={contactFormState} />
      )}
    </>
  );
};

export default Contact;
