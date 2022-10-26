import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../../features/products/productSelector';

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const isEmptyCategory = categories && categories.length > 0 ? false : true;
  const activeCategory = null;

  return (
    <div className='homepage-content'>
      <select name='' id='' className='gender-select'>
        <option value=''>FILTER BY GENDER</option>
        <option value='male'>Men's</option>
        <option value='female'>Women's</option>
      </select>
      <div className='right-border'>
        <p className='homepage-category-text'>Category Lists</p>
        <div className='category-list'>
          <ul>
            <li
              className={!activeCategory ? 'active' : ''}
              //onClick={() => dispatch(setActiveCategories(''))}
            >
              All
            </li>
            {!isEmptyCategory &&
              categories.map((c) => (
                <li
                  className={activeCategory === c.id ? 'active' : ''}
                  //onClick={() => dispatch(setActiveCategories(c.id))}
                  key={c.id}
                  to='#'
                >
                  {c.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
