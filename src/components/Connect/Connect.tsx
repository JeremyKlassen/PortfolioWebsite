import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Submitted from "./Submitted";
import LinkedIn from "../SocialMedia/LinkedIn";
import Github from "../SocialMedia/Github";
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
      <h1>Feel free to connect with me on these social media platforms.</h1>
      <LinkedIn size={3} />
      <Github size={3} />
      <Instagram size={3} />
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

export default Connect;
