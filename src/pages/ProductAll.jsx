import React from 'react';
import { useEffect } from 'react';

const ProductAll = () => {

	// API 호출 함수
	const getProducts = async() => {
		let url = 'http://localhost:3001/products';
		let response = await fetch(url);
		let data = await response.json();

		// console.log(data);
	}

	useEffect(()=>{
		getProducts();
	},[])
	return (
		<div>전체 상품 페이지</div>
	)
}

export default ProductAll;