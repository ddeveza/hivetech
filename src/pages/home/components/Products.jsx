import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../features/products/asyncThunks';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Products</div>;
};

export default Products;
