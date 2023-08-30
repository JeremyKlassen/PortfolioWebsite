import styles from "./Website.module.css";
import ReactLogo from "../../SocialMedia/ReactLogo";

const Website = () => {
  return (
    <section className={styles.thisWebsiteContainer}>
      <h2>This Website!</h2>
      <p>
        This website was crafted from the ground up using React. React is the
        premiere interactive web library developed by Facebook. It is used for
        creating highly advanced web platforms.{" "}
        <strong>
          Such platforms include Facebook, Instagram, Airbnb, Netflix, WhatsApp,
          Twitter, Uber, Hulu… and many many more.
        </strong>
        It is also an excellent platform for building custom data solutions.
      </p>
      <div className={styles.reactLogoContainer}>
        <ReactLogo size={5} />
      </div>
    </section>
  );
};

export default Website;
