import PlusIcon from '../../../assets/images/plus.svg';
const CategoryCard = (props) => {
  const { name, image } = props.data;
  return (
    <div className='category-items'>
      <img className='category-image' src={image} alt='' />
      <div className='white-transparent'></div>
      <img className='category-plus' src={PlusIcon} alt='' />
      <p className='category-text'>{name}</p>
    </div>
  );
};

export default CategoryCard;
