import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IFilterType = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({ filter, setFilter }: Props) {
  
  function selectFilterType(filterType: IFilterType) {
    if (filter == filterType.id) return setFilter(null);
    return setFilter(filterType.id);
  }
  return (
    <div className={styles.filters}>
      {filters.map(filterType => (
        <button className={classNames({
          [styles.filters__filter]: true,
          [styles['filters__filter--active']]: filter === filterType.id
        })} key={filterType.id} onClick={() => selectFilterType(filterType)}>
          {filterType.label}
        </button>
      ))}
    </div>
  );
}