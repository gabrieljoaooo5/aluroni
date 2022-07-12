import styles from './About.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import house from 'assets/about/house.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

const images = [pasta1, pasta2];

export default function About() {
  return (
    <section>
      <h3 className={themeStyles.title}> About </h3>
      <div className={styles.aboutUs}>
        <img src={house} alt="Aluroni House" />
        <div className={styles.aboutUs__text}>
          <p>
            We at Aluroni offer you, our dear customers, the tastiest and most sophisticated Homemade Italian Pasta in São Paulo! We cherish the traditional ingredients of Italian cuisine, fresh and of excellent quality so that your experience is even more intense!
          </p>
          <p>
            We also have a meat menu with many options according to your taste!
          </p>
          <p>
            To accompany Italian pasta, Aluroni has a reserve of special wines, which harmonize perfectly with your delivery, whether meat or pasta!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.images__image}>
            <img src={image} alt="Pasta image" />
          </div>
        ))}
      </div>
    </section>
  );
}