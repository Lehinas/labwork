import {faFacebook, faInstagram, faTelegram, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerSection}>
					<h4>About GameStore.KZ</h4>
					<p>We provide high-quality PC peripherals to take your gaming to the next level. Stay connected and
						experience gaming like never before!</p>
				</div>
				<div className={styles.footerSection}>
					<h4>Quick Links</h4>
					<ul>
						<li><a href="#home">Home</a></li>
						<li><a href="#shop">Shop</a></li>
						<li><a href="#news">News</a></li>
						<li><a href="#about">About Us</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
				<div className={styles.footerSection}>
					<h4>Follow Us</h4>
					<div className={styles.socialLinks}>
						<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faFacebook}/>
						</a>
						<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faInstagram}/>
						</a>
						<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faYoutube}/>
						</a>
						<a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faTelegram}/>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>&copy; 2024 GameStore.KZ | Almaty</p>
			</div>
		</footer>
	)
}

export default Footer