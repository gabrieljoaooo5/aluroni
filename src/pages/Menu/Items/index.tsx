import menu from 'data/menu.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useState, useEffect } from 'react';

interface Props {
    search: string;
    filter: number | null;
    order: string;
}

export default function Items(props: Props) {
  const [menuList, setMenuList] = useState(menu);
  const { search, filter, order } = props;

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter != null) return filter === id;
    return true;
  }

  function orderList(newMenuList: typeof menu) {
    switch(order) {
    case 'portion': 
      return newMenuList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'amnt_people':
      return newMenuList.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'price':
      return newMenuList.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return newMenuList; 
    }
  }

  useEffect(() => {
    const newMenuList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setMenuList(orderList(newMenuList));
  }, [search, filter, orderList]);
  return (
    <div className={styles.items}>
      {menuList.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}