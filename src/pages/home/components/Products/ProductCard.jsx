export default function ProductCard(props) {
  const { name, description, price, image } = props.product;
  let quantity = props.cart ? props.cart.quantity : 0;

  return (
    <div className='product-card'>
      <img className='product-image' src={image} alt='product' />
      <div className='product-content'>
        <p className='product-title'>{name}</p>
        <p className='product-description'>{description}</p>
      </div>
      <div className='price-content'>
        <p className='product-price'>${price}</p>
        {quantity > 0 ? (
          <div className='added-cart'>
            <span> - </span>
            <span className='margin-top-4'> {quantity} </span>
            <span className='margin-top-4'>+</span>
          </div>
        ) : (
          <button className='add-cart-btn'>Add +</button>
        )}
      </div>
    </div>
  );
}
