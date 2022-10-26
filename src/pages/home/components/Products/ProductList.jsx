import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <>
      <div className='product-container'>
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
