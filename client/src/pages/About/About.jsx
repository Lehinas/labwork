import React from 'react';
import styles from './About.module.css';
import inf2 from '../../assets/images/inf/inf2.jpg'; // Путь к картинке

const About = () => {
	return (
		<div className={styles.abc}>
			{/* Section */}
			<section className={styles.section}>
				<div className={styles.textContent}>
					<h1>Your Success Is at the Heart of What We Do.</h1>
					<p>In a world driven by technology and rapid change, we stand as a beacon of innovation and reliability. Our team combines cutting-edge solutions with a client-first approach to deliver results that matter. At GameStore.KZ, we don't just solve problems — we create opportunities for growth, efficiency, and success in the digital age.</p>
					<button>Get in touch →</button>
				</div>
				<div className={styles.imageContent}>
					<img src={inf2} alt="News Image" />
				</div>
			</section>

			{/* Why work with us */}
			<section className={styles.cardsSection}>
				<h2>Why work with us</h2>
				<div className={styles.cardsContainer}>
					<div className={`${styles.card} ${styles.purple}`}>
						<span>Experience</span>
						<h3>Years of Expertise</h3>
						<p>We have over 10 years of experience delivering exceptional solutions to businesses worldwide.</p>
					</div>
					<div className={`${styles.card} ${styles.orange}`}>
						<span>Innovation</span>
						<h3>Cutting-edge Technology</h3>
						<p>We leverage the latest technologies to provide innovative and efficient solutions tailored to your needs.</p>
					</div>
					<div className={`${styles.card} ${styles.green}`}>
						<span>Support</span>
						<h3>24/7 Support</h3>
						<p>Our team is available around the clock to provide assistance and ensure your success.</p>
					</div>
				</div>
			</section>

			{/* Subscribe */}
			<section className={styles.subscribe}>
				<h3>Subscribe</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div className={styles.subscribeContainer}>
					<div className={styles.subscribeBox}>
						<h4>Stay in the loop</h4>
						<p>Subscribe to receive the latest news and updates about GameStore.KZ<br />We promise not to spam you!</p>
						<form action="#" method="post">
							<input type="email" placeholder="Enter email address" required />
							<button type="submit">Continue</button>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer>
				<div className={styles.footerContainer}>
					<div className={`${styles.footerSection} ${styles.about}`}>
						<h4>About GameStore.KZ</h4>
						<p>We provide high-quality PC peripherals to take your gaming to the next level. Stay connected and experience gaming like never before!</p>
					</div>
					<div className={`${styles.footerSection} ${styles.links}`}>
						<h4>Quick Links</h4>
						<ul>
							<li><a href="#home">Home</a></li>
							<li><a href="#shop">Shop</a></li>
							<li><a href="#news">News</a></li>
							<li><a href="#about">About Us</a></li>
							<li><a href="#Sign-in">Sign in</a></li>
						</ul>
					</div>
					<div className={`${styles.footerSection} ${styles.social}`}>
						<h4>Follow Us</h4>
						<div className={styles.socialLinks}>
							<a href="https://www.facebook.com" target="_blank">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="https://www.instagram.com" target="_blank">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="https://www.youtube.com" target="_blank">
								<i className="fab fa-youtube"></i>
							</a>
							<a href="https://www.telegram.com" target="_blank">
								<i className="fab fa-telegram"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={styles.footerBottom}>
					<p>&copy; 2024 GameStore.KZ | Almaty</p>
				</div>
			</footer>
		</div>
	);
};

export default About;
