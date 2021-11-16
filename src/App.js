import { Component } from "react";
// Components
import {Products} from './components/Products'
import {Layout} from './components/Layout';
import {Title} from './components/Title';
import {Navbar} from './components/Navbar';

/* eslint-disable */

class App extends Component {
  state = {
      products: [
          {name: 'Tomate', price: 2, emoji: '🍅'},
          {name: 'Lechuga', price: 15, emoji: '🥬'},
          {name: 'Arbejas', price: 20, emoji: '🥒'}
      ],
      cart: [],
      isCartVisible: false,
  }

  addToCart = (product) => {
      const {cart} = this.state
      if (cart.find(x => x.name === product.name)){
          const newCart = cart.map(x => x.name === product.name
          ? ({
                  ...x,
                  quantity: x.quantity + 1
              })
          : x )

          return this.setState({cart: newCart})
      }
      return this.setState({
          cart: this.state.cart.concat({
              ...product,
              quantity: 1
          })
      })
  }

  showCart = () => {
      this.setState({isCartVisible: !this.state.isCartVisible})
  }

  render() {
    const {isCartVisible} = this.state;
    return (
        <div>
            <Navbar
                cart={this.state.cart}
                isCartVisible={isCartVisible}
                showCart={this.showCart}
            />
            <Layout>
                <Title />
                <Products
                    addToCart={this.addToCart}
                    products={this.state.products}
                />
            </Layout>
        </div>
    )
  }
}

export default App;
