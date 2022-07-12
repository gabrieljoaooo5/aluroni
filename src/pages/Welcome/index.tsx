import menu from 'data/menu.json';
import styles from './Welcome.module.scss';

export default function Welcome() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
  return (
    <section>
      <h3 className={styles.title}>
                Kitchen recommendations
      </h3>
      <div className={styles.recommendedDishes}>
        {recommendedDishes.map(item =>(
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>
                            See more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}