import menu from './items.json';
import Item from './Item';
import styles from './Items.module.scss';
import { useState, useEffect } from "react";

interface Props {
    search: string;
    filter: number | null;
    order: string;
}

export default function Items(props: Props) {
    const [menuList, setMenuList] = useState(menu);
    const { search, filter } = props;

    function testSearch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number) {
        if (filter != null) return filter === id;
        return true;
    }

    useEffect(() => {
        const newMenuList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setMenuList(newMenuList);
    }, [search, filter])
    return (
        <div className={styles.items}>
            {menuList.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}