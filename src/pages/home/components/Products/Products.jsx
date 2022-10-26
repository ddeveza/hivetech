import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../features/products/asyncThunks';
import { productSelector } from '../../../../features/products/productSelector';
import ProductList from './ProductList';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log({ products });

  return (
    <div className='homepage-content'>
      <div className='homepage-title'>Product List</div>
      {products.length > 0 && <ProductList products={products} />}
    </div>
  );
};

export default Products;
