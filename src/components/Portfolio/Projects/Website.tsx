import styles from "./Website.module.css";
import ReactLogo from "../../SocialMedia/ReactLogo";

const Website = () => {
  return (
    <section className={styles.thisWebsiteContainer}>
      <h2>This Website!</h2>
      <p>
        This website isn’t some template I found off Wordpress, it is a project
        crafted from the ground up. It was{" "}
        <strong>developed using React</strong>, the premiere coding library
        developed by Facebook, for creating highly advanced web platforms.{" "}
        <strong>
          These platforms include Facebook, Instagram, Airbnb, Netflix,
          WhatsApp, Twitter, Uber, Hulu… and many many more.
        </strong>
        It is also an excellent platform for building custom data web app
        solutions.
      </p>
      <div className={styles.reactLogoContainer}>
        <ReactLogo size={5} />
      </div>
    </section>
  );
};

export default Website;
