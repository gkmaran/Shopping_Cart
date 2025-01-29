import './Product.css'
function Product({product,cart,setCart}){
    const addToCart=()=>{
        let indexCartElement=cart.findIndex((item)=>item.id===product.id)
            if(indexCartElement >= 0){
                let updatedCart=cart.map((item ,index)=>
                    index === indexCartElement ?{...item ,quantity:item.quantity + 1}:item
                )
                setCart(updatedCart)
            }
            else{
                setCart([...cart ,{...product ,quantity :1}])
            }
    }

    return(
        <>
            <div className="product">
                <div className="img">
                    <img src={product.image} alt="image" />
                </div>
                <div className="details">
                    <h3>{product.name}</h3>
                    <h5>Rs:{product.price}</h5>
                    <button onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default Product