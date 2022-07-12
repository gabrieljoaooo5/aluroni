import styles from './MenuCard.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Order from './Order';
import Items from './Items';

export default function MenuCard() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState('');
  return (
    <section className={styles.menu}>
      <h3 className={styles.menu__title}>Menu</h3>
      <Search search={search} setSearch={setSearch} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Items search={search} filter={filter} order={order} />
    </section>
  );
}