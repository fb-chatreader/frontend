import React, { useContext } from 'react';
import { BookContext } from '../../../../Providers/BooksProvider';
import styles from '../styles/CategorySidebarMenu.module.scss';

const CategoryMenu = (props) => {
  const { books, categories, selected, setSelected } = props;
  const [ state, dispatch ] = useContext(BookContext);

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.categoriesHeader}>Categories</h3>
      <ul className={styles.filterOptionContainer}>
        {categories.map((category) => (
          <div
            className={styles.filterOption}
            key={category}
            onClick={(e) => {
              dispatch({
                type: 'SELECTED_CATEGORY',
                payload: category
              });
              return setSelected(category);
            }}
            style={{
              backgroundColor: selected === category ? 'rgba(0,0,0,0.1)' : 'initial'
            }}
          >
            {category} ({books.filter((b) => b.category === category).length})
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
