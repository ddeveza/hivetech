import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/asyncThunks';
import { categoriesSelector } from '../../../features/products/productSelector';

const Categories = () => {
  const categories = useSelector(categoriesSelector);
  const isEmptyCategory = categories && categories.length > 0 ? false : true;

  const dispatch = useDispatch();
  const [type, setType] = useState('');
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    dispatch(getProducts({ type, category_id: activeCategory }));
  }, [dispatch, type, activeCategory]);

  return (
    <div className='homepage-content'>
      <select
        name=''
        id=''
        className='gender-select'
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
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
              onClick={() => setActiveCategory('')}
            >
              All
            </li>
            {!isEmptyCategory &&
              categories.map((c) => (
                <li
                  className={activeCategory === c.id ? 'active' : ''}
                  onClick={() => setActiveCategory(c.id)}
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
