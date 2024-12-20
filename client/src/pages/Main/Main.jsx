import React from 'react';
import styles from './Main.module.css';

// Импортируем изображения
import controllerImg from '../../assets/images/controller.png';
import miceImg from '../../assets/images/categories/mice.jpg';
import keyboardImg from '../../assets/images/categories/keyboards.jpg';
import headphonesImg from '../../assets/images/categories/headphones.jpg';
import monitorImg from '../../assets/images/categories/monitor.jpg';
import newsImg from '../../assets/images/news.jpeg';
import project1Img from '../../assets/images/gallery/Rectangle 15.jpg';
import project2Img from '../../assets/images/gallery/Rectangle 16.jpg';
import project3Img from '../../assets/images/gallery/Rectangle 17.jpg';
import project4Img from '../../assets/images/gallery/Rectangle 18.jpg';
import project5Img from '../../assets/images/gallery/Rectangle 20.jpg';
import project6Img from '../../assets/images/gallery/Rectangle 19.jpg';

const Main = () => {
	return (
		<div className={styles.main}>
			<section className={styles.hero}>
				<h2>Work that we produce for our clients</h2>
				<p>Experience the game on a new level with our gaming peripherals!</p>
				<div className={styles.gamepadBtn}>
					<a href="#details" className={styles.btnDetails}>Get more details</a>
					<img src={controllerImg} alt="Gaming Controller" />
				</div>
			</section>

			<section className={styles.categories}>
				<h3>Our Categories</h3>
				<div className={styles.categoriesGrid}>
					<div className={styles.categoryCard}>
						<a href="/html/mice-store.html"><img src={miceImg} alt="Mice" /></a>
						<h4>Mice</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/keyboard-store.html"><img src={keyboardImg} alt="Keyboards" /></a>
						<h4>Keyboards</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/headphones-store.html"><img src={headphonesImg} alt="Headphones" /></a>
						<h4>Headphones</h4>
					</div>
					<div className={styles.categoryCard}>
						<a href="/html/monitor-store.html"><img src={monitorImg} alt="Monitors" /></a>
						<h4>Monitors</h4>
					</div>
				</div>
			</section>

			<section className={styles.news}>
				<h3>Your game, your rules — choose the periphery that suits you.</h3>
				<div className={styles.newsText}>
					<h4>New News from DOTA 2</h4>
					<p>"Today, Valve announced a major update for Dota 2, which will bring a lot of <br/> new products and improvements to the game loved by many. The main <br/> focus of the patch is on adding a new hero, as well as changes to the <br/> balance of the game."</p>
				</div>
				<div className={styles.newsImg}>
					<img src={newsImg} alt="News" />
				</div>
			</section>

			<section className={styles.projects}>
				<h3>Our Recent Projects</h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<div className={styles.projectsGrid}>
						<img src={project1Img} alt="Project 1"/>
						<img src={project2Img} alt="Project 2"/>
						<img src={project3Img} alt="Project 3"/>
						<img src={project6Img} alt="Project 5"/>
						<img src={project4Img} alt="Project 4"/>
						<img src={project5Img} alt="Project 5"/>

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

export default Main;
