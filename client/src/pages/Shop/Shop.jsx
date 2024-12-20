import React from 'react';
import styles from './Shop.module.css';
import miceImg from '../../assets/images/categories/mice.jpg';
import keyboardsImg from '../../assets/images/categories/keyboards.jpg';
import headphonesImg from '../../assets/images/categories/headphones.jpg';
import monitorImg from '../../assets/images/categories/monitor.jpg';
import inf1Img from '../../assets/images/inf/inf1.jpg';
import inf2Img from '../../assets/images/inf/inf2.jpg';
import inf3Img from '../../assets/images/inf/inf3.jpg';

const Shop = () => {
	return (
		<div className={styles.abc}>
			<section className={styles.hero}>
				<h2>"Shop with confidence — we offer only the most trusted <br /> and high-quality products for your PC!"</h2>
				<p>Experience the game on a new level with our gaming peripherals!</p>
			</section>

			<section className={styles.categories}>
				<h3>Our Categories</h3>
				<div className={styles.categoriesGrid}>
					<div className={styles.categoryCard}>
						<a href="/html/mice-store.html">
							<img src={miceImg} alt="Mice" />
						</a>
						<h4>Mice</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/keyboard-store.html">
							<img src={keyboardsImg} alt="Keyboards" />
						</a>
						<h4>Keyboards</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/headphones-store.html">
							<img src={headphonesImg} alt="Headphones" />
						</a>
						<h4>Headphones</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/monitor-store.html">
							<img src={monitorImg} alt="Monitors" />
						</a>
						<h4>Monitors</h4>
					</div>
				</div>
			</section>

			<section className={styles.infDop}>
				<div className={styles.infPart}>
					<div className={styles.textInf}>
						<h3>Lorem Ipsum is simply dummy text dummy text </h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries,</p>
						<a href="#contact" className={styles.ctaButton}>Read More</a>
					</div>
					<div className={styles.imgInf}>
						<img src={inf1Img} alt="inf" />
					</div>
				</div>

				<div className={styles.infPart}>
					<div className={styles.imgInf}>
						<img src={inf2Img} alt="inf" />
					</div>
					<div className={styles.textInf}>
						<h3>Lorem Ipsum is simply dummy text dummy text </h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries,</p>
						<a href="#contact" className={styles.ctaButton}>Read More</a>
					</div>
				</div>

				<div className={styles.infPart}>
					<div className={styles.textInf}>
						<h3>Lorem Ipsum is simply dummy text dummy text </h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br />when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />It has survived not only five centuries,</p>
						<a href="#contact" className={styles.ctaButton}>Read More</a>
					</div>
					<div className={styles.imgInf}>
						<img src={inf3Img} alt="inf" />
					</div>
				</div>
			</section>

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

		</div>
	);
};

export default Shop;
