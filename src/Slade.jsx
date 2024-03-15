import React, { useCallback, useState } from 'react'
import data from './Data/data'
import img1 from "./img1.jpg"
import "./slade.css"
function Slade() {
const [img,setImg] = useState(img1)
const [title,setTitle] = useState("Â")
const handleClick = (item)=> {
    setImg(item.img)
    setTitle(item.title)
}
    return (
        <div>
            <div className="slade_container">
                <img className='big_img' src={img} alt="" />
                <h1>{title}</h1>
                <div className="slade_item">
                    {data.productData.map((item) => {
                        return (
                            <div className="slade_box">
                                <img onClick={()=> handleClick(item)} src={item.img} alt="" />
                                <h1>{item.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Slade
