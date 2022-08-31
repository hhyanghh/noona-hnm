import React from 'react';
import { useEffect,useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
	const [productList, setProductList] = useState([]);

	// API 호출 함수
	const getProducts = async() => {
		let url = 'http://localhost:3001/products';
		let response = await fetch(url);
		let data = await response.json();

		// console.log(data);
		setProductList(data);
	}

	useEffect(()=>{
		getProducts();
	},[])
	return (
		<div>
			<Container>
				<Row>
					{productList.map((menu, index) => (
						<Col lg={3} key={index}><ProductCard item={menu} /></Col>
					))}
				</Row>
			</Container>
		</div>
	)
}

export default ProductAll;