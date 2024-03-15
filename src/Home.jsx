import React from 'react'
import data from './Data/data'
import ItemCard from './ItemCard';
function Home() {
    console.log(data.productData);

    return (
        <div>
            <div className="card_container">
                <h1>All Product</h1>
                <div className="card_item">
                    {data.productData.map((item, index) => {
                        return (
                            <ItemCard 
                            img={item.img} 
                            price={item.price} 
                            title={item.title}
                            disc={item.disc} 
                            index={index} 
                            item={item} />
                            

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
