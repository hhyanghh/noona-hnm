import React from 'react'

const ProductCard = ({item}) => {
	return (
		<div className="card">
			<img src={item?.img} alt="" />
			<div>{item?.choice === true? "Choice" : ""}</div>
			<div>{item?.title}</div>
			<div>₩{item?.price}</div>
			<div>{item?.new === true? "NEW!" : ""}</div>
		</div> 
	)
}

export default ProductCard;