import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../features/products/asyncThunks';
import {
  categoriesSelector,
  loadingSelector,
} from '../../../features/products/productSelector';

import CategoryCard from './CategoryCard';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading ......</h2>;
  }

  return (
    <div className='category'>
      {categories.length > 0
        ? categories.map((category, index) => (
            <CategoryCard key={index} data={category} />
          ))
        : null}
    </div>
  );
};

export default Categories;
