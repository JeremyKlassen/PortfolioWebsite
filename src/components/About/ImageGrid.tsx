import bird from "../../assets/bird.jpg";
import bridge from "../../assets/bridge.jpg";
import lake from "../../assets/lake.jpg";
import powerPlant from "../../assets/powerPlant.jpg";
import styles from "./ImageGrid.module.css";

const ImageGrid = () => {
  const imageUrls = [bird, bridge, lake, powerPlant];

  return (
    <div className={styles.ImageGrid}>
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className={styles.gridItem}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
