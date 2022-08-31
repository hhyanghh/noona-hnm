import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
	let {id} = useParams();
	const [product, setProduct] = useState(null);
	const getProductDetail = async() => {
		let url = `https://my-json-server.typicode.com/hhyanghh/noona-hnm/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		// console.log(data);
		setProduct(data);
	}

	useEffect(()=>{
		getProductDetail();
	},[])
	return (
		<Container>
			<Row>
				<Col className="product-img">
						<img src={product?.img} alt="" />
					</Col>
				<Col>
					<div>{product?.title}</div>
					<div>₩{product?.price}</div>
					<div>choice</div>
					<div>
						<Dropdown>
							<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
								Size
							</Dropdown.Toggle>

							<Dropdown.Menu variant="dark">
								<Dropdown.Item href="#/action-1" >
									{product?.size[0]}
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2" >
									{product?.size[1]}
								</Dropdown.Item>
								<Dropdown.Item href="#/action-3" >
									{product?.size[2]}
								</Dropdown.Item>
								
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="d-grid">
						<Button variant="dark" size="lg">추가</Button>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductDetail;