import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptColor from '../OptColor/OptColor';
import OptSize from '../OptSize/OptSize';


const ProductForm = ({handleSubmit, currentSize, currentColor, sizes, colors, setCurrentSize, setCurrentColor}) => {

    return (
        <form onSubmit={handleSubmit}>
            <OptSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}/>
            <OptColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            <Button className={styles.button} >
              <span className="fa fa-shopping-cart" />
            </Button>
        </form>

    );
};

ProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
  };

export default ProductForm;