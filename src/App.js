import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import DetailedProduct from './components/DetailedProduct/DetailedProduct';
import ProductDetailsContext from './components/Context/ProductDetailsContext';

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  // calculate total quantity
  useEffect(()=>{
    const quantity = cartProducts.reduce((prevQuantity, product)=>{
      return prevQuantity + product.quantity;
    },0)

    setQuantity(quantity);
  }, [cartProducts])


  // calculate total price
  useEffect(()=>{
    const totalPrice = cartProducts.reduce((prevPrice, product)=>{
      return prevPrice + (product.price * product.quantity);
    },0)

    setTotalPrice(totalPrice);
  }, [cartProducts])


  // function to add product to cart
  function addToCart(productID){
    const newProduct = products.find((product)=>{
      return product.id==productID;
    })
    const newProductObj = {
      productID : newProduct.id,
      productName : newProduct.title,
      productImage : newProduct.image,
      productPrice : newProduct.price,
      quantity : 1
    }
    setCartProducts([...cartProducts, newProductObj])
    alert("Item added to cart")
  }

  // function to remove an item from cart
  function removeFromCart(productID){
    const filteredCartProducts = cartProducts.filter((product)=>{
      return product.id !== productID
    })
    setCartProducts(filteredCartProducts)
  }

  // function to increase quantity
  function increaseQuantity(productID){
    const index = cartProducts.findIndex((product)=>{
      return product.id == productID;
    })

    cartProducts[index].quantity = quantity+1;
    console.log(cartProducts[index].quantity)
  }

  // function to decrease the quantity
  function decreaseQuantity(productID){
    const index = cartProducts.findIndex((product)=>{
      return product.id == productID;
    })
    if(cartProducts[index].quantity > 2){
      cartProducts[index].quantity = quantity-1;
      console.log(cartProducts[index].quantity)
    }
  }

  // fetching data from an api and storing into products state
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
      return res.json()
    })
    .then((result)=>{
      setProducts(result)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <BrowserRouter>
    <ProductDetailsContext.Provider value={{products, cartProducts, addToCart, quantity, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Products products={products}/>}/>
          <Route path='/:id' element={<DetailedProduct products={products}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </div>
      </ProductDetailsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
