import React from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
    const {
        isEmpty,
        items,
        totalUniqueItems,
        totalItems,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
    } = useCart()
    if (isEmpty) return <h1>Your Cart is Empty</h1>
    return (
        <div className='cart_container'>
            <h1>Nech xil {totalUniqueItems} necha dona {totalItems}</h1>
            <div className="cart_item">
                {items.map((item) => {
                    return (
                        <div className="cart_box">
                            <img src={item.img} alt="" />
                            <h4>{item.title}</h4>
                            <p>{item.disc}</p>
                            <h5>({item.quantity}):dona</h5>
                            <b>{item.price}</b>
                            <div className="buttons">
                                <button onClick={()=> updateItemQuantity(item.id , item.quantity -1)}>-</button>
                                <button onClick={()=> updateItemQuantity(item.id , item.quantity +1)}>+</button>
                                <button onClick={()=> removeItem(item.id)}>O'chirish</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="cart_total">
                <h1>Cart Total: {cartTotal}</h1>
            </div>
            <div className="cart_clear">
                <button onClick={()=> emptyCart()}>Clear</button>
            </div>
            <button>Mahsulorlarni ko'rish</button>

        </div>
    )
}

export default Cart
