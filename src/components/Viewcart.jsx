import { useEffect, useState } from 'react'
import './Viewcart.css'
import { useContext } from 'react';
import { cartContext } from '../App';
function Viewcart(){
    const{cart,setCart}=useContext(cartContext)
    const[total,setTotal]=useState(0)

    const handleIncrement = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, quantity:item.quantity + 1 } : item
          )
        );
      };
      
      const handleDecrement = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: (item.quantity) - 1 }
              : item
          )
          .filter(item=>item.quantity > 0)
        );
      };
    const removeCart=(id)=>{
        setCart(cart.filter((item)=>item.id!==id))
    }
    useEffect(() => {
        if (cart.length > 0) {
            setTotal(cart.reduce((acc, element) => acc + parseInt(element.price)*(element.quantity), 0));
        } else {
            setTotal(0); 
        }
    }, [cart]);
    let formattedTotal=total.toFixed(2)
    return(
        <>
            <h2>Cart Products</h2>
            <div className="cart-container">
                {cart.map((product)=>(
                    <div className="cart-product" key={product.id}>
                    <div className="img">
                        <img src={product.image} alt="image" />
                    </div>
                    <div className="cartDetails">
                        <h3>{product.name}</h3>
                        <h5>Rs:{product.price}</h5>
                        <h3 className='quantity'><span className='increment'><i onClick={()=>handleDecrement(product.id)} className="fa-solid fa-minus"></i></span>{product.quantity}<span className='decreament'><i onClick={()=>handleIncrement(product.id)} className="fa-solid fa-plus"></i></span></h3>
                        <div className="rembtn">
                            <button onClick={()=>removeCart(product.id)}><i className="fa-solid fa-trash"></i></button>
                        </div> 
                    </div>
                </div>
                ))}
            </div>
                <div className='amt'>
                {
                cart.length > 0 ? `Total Amount :${formattedTotal}` : ''
                }</div>
            
        </>
    )
}
export default Viewcart