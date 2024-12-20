import React from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import default_avatar from "../../assets/images/default-avatar.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
	const isAuth = useSelector(state => state.user.isAuth)
	const user = useSelector(state => state.user.currentUser)
	return (
		<header className={styles.header}>
			<Link className={styles.logo}>GameStore.KZ</Link>
			<nav className={styles.container}>
				<ul className={styles.navList}>
					<li><Link to={"/main"}>Home</Link></li>
					<li><Link to={"/shop"}>Shop</Link></li>
					<li><Link to={"/about"}>About Us</Link></li>
				</ul>
				<div className={styles.user}>
					{!isAuth && <Link to={"/login"} className={styles.navbar_login}>Войти</Link>}
					{isAuth && <Link to={"/main"} className={styles.user_username}>{user.username}</Link>}
					<img src={default_avatar} className={styles.user_avatar}/>
				</div>
			</nav>

		</header>
	)
}

export default Navbar