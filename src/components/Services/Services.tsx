import ContactForm from "../Connect/ContactForm";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <>
      <h1 className={styles.servicesH1}>Services</h1>
      <div className={styles.webDev}>
        <h2>Web Development</h2>
        <h3>Full Stack Solutions for your digital needs</h3>
        <div className={styles.servicesLists}>
          <ul>
            <li>- Website Construction</li>
            <li>- UI/UX Research and Design</li>
            <li>- Database Design</li>
            <li>- Visualizations</li>
          </ul>
          <ul>
            <li>- Web Applications</li>
            <li>- Dashboards</li>
            <li>- User Logins and accounts</li>
          </ul>
        </div>
      </div>
      <div className={styles.data}>
        <h2>Information Systems</h2>
        <h3>Working with your data</h3>
        <div className={styles.servicesLists}>
          <ul>
            <li>- Consulting</li>
            <li>- Data Strategy Analysis</li>
            <li>- Data Consolidation and Migration</li>
            <li>- Data Driven Storytelling</li>
          </ul>
          <ul>
            <li>- Exploratory Analysis Reports</li>
            <li>- Statistical Analysis Reports</li>
            <li>- Data Pipelines</li>
            <li>- Analytics</li>
          </ul>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Services;
