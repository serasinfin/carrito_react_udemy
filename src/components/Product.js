import {Component} from 'react';
import {Button} from './Button';

const styles = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px rgba(0,0,0,0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
}

class Product extends Component {
    render(){
        const {product, addToCart} = this.props;
        return(
            <div style={styles.product}>
                <h1 style={styles.emoji}>{product.emoji}</h1>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button onClick={() => addToCart(product)}>
                    Agregar
                </Button>
            </div>
        )
    }
}

export {Product}