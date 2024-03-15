import React from 'react'
import {useCart} from "react-use-cart"

function ItemCard(props) {
    const {addItem} = useCart()
    return (
        <div>
            <div className="card_box" key={props.index}>
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{props.disc}</p>
                <b>{props.price}</b>
                <del>{props.old_price}</del> <br />
                <button onClick={()=> addItem(props.item)} type='submit'>sotib olish</button>
            </div>
            
        </div>
    )
}

export default ItemCard
