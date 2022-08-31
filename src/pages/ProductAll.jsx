import React from 'react';
import { useEffect,useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
	const [productList, setProductList] = useState([]);
	const [query, setQuery] = useSearchParams();

	// API 호출 함수
	const getProducts = async() => {
		let searchQuery = query.get('q') || "";
		// console.log("query?",searchQuery);
		let url = `https://my-json-server.typicode.com/hhyanghh/noona-hnm/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();

		// console.log(data);
		setProductList(data);
	}

	useEffect(()=>{
		getProducts();
	},[query])
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