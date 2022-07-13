import menu from 'data/menu.json';
import styles from './Welcome.module.scss';
import themeStyles from 'styles/Theme.module.scss';
import ourHome from 'assets/our_home.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dish';

export default function Welcome() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,4);
  const navigate = useNavigate();

  function redirectToDetails(dish: Dish) {
    navigate(`/dish/${dish.id}`, {state: { dish }, replace: true });
  }
  return (
    <section>
      <h3 className={themeStyles.title}>
                Kitchen recommendations
      </h3>
      <div className={styles.recommendedDishes}>
        {recommendedDishes.map(item =>(
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button} onClick={() => redirectToDetails(item)}>
                            See more
            </button>
          </div>
        ))}
      </div>
      <h3 className={themeStyles.title}>Our Home</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt='Aluroni house' />
        <div className={styles.ourHome__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}