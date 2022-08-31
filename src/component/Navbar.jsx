import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const menuList = [
		"여성",
		"Divided",
		"남성",
		"신생아/유아",
		"아동",
		"H&M Home",
		"Sale",
		"지속가능성"
	];
	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/login');
	}
	const goToMain = () => {
		navigate('/')
	}

	return (
		<div>
			<div>
				<div className="login-button" onClick={goToLogin}>
					<FontAwesomeIcon icon={faUser} className="mr-4" />
					<div>로그인</div>
				</div>
			</div>
			<div className="flex-center" onClick={goToMain}>
				<img width={100} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png" alt="H&M" />
			</div>
			<div className="menu-area">
				<ul className="menu-list">
					{menuList.map((menu, index) => (
						<li key={index}>{menu}</li>
					))}
				</ul>
				<div className="search-input">
					<FontAwesomeIcon icon={faSearch} className="mr-4"/>
					<input type="text" placeholder="상품검색"/>
				</div>
			</div>
		</div>
	)
}

export default Navbar;