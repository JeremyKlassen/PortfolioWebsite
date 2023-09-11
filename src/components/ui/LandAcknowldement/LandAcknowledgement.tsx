import styles from "./LandAcknowledgement.module.css";

const LandAcknowledgement = () => {
  return (
    <section className={styles.acknowledgementSection}>
      <h2>Land Acknowledgement</h2>
      <p>
        I acknowledge that the land on which I reside in southern Manitoba is a
        part of Treaty 1 territory. This is the homeland of the Red River Metis,
        and traditional territory of the Anishinaabe, Ininiwak, and Dakota Oyate
        peoples. Additionally the water I consume is acquired from Treaty 3
        territory. I recognize my contribution to the damage of these lands and
        commit to finding ways to better care for it. Additionally I have
        various ethical responsibilies, that result from the failure of our
        legal system, to maintain the spirit of these treaties.
      </p>
    </section>
  );
};

export default LandAcknowledgement;
