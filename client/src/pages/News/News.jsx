import React from 'react';
import styles from './News.module.css';

const News = () => {
	return (
		<div className={styles.container}>
			<div className={styles.mainContent}>
				<div className={styles.article}>
					<img src="../../assets/images/inf/inf1.jpg" alt="News Image" />
					<span className={styles.badge}>John smash</span> <span>5min</span>
					<h2>Lorem Ipsum is simply dummy text dummy text</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
				</div>
				<div className={styles.article}>
					<img src="../../assets/images/inf/inf2.jpg" alt="News Image" />
					<span className={styles.badge}>John smash</span> <span>5min</span>
					<h2>Lorem Ipsum is simply dummy text dummy text</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
				</div>
			</div>

			<div className={styles.sidebar}>
				<div className={styles.sidebarItem}>
					<img src="../../assets/images/news/news1.jpg" alt="Thumbnail" />
					<div>
						<span className={styles.badge}>John smash</span> <span>5min</span>
						<h3>Lorem Ipsum is simply dummy text dummy text?</h3>
					</div>
				</div>
				<div className={styles.sidebarItem}>
					<img src="../../assets/images/news/news2.jpg" alt="Thumbnail" />
					<div>
						<span className={styles.badge}>John smash</span> <span>5min</span>
						<h3>Lorem Ipsum is simply dummy text dummy text?</h3>
					</div>
				</div>
				<div className={styles.sidebarItem}>
					<img src="../../assets/images/news/news1.jpg" alt="Thumbnail" />
					<div>
						<span className={styles.badge}>John smash</span> <span>5min</span>
						<h3>Lorem Ipsum is simply dummy text dummy text?</h3>
					</div>
				</div>
				<div className={styles.sidebarItem}>
					<img src="../../assets/images/news/news3.jpg" alt="Thumbnail" />
					<div>
						<span className={styles.badge}>John smash</span> <span>5min</span>
						<h3>Lorem Ipsum is simply dummy text dummy text?</h3>
					</div>
				</div>
				<div className={styles.sidebarItem}>
					<img src="../../assets/images/news/news3.jpg" alt="Thumbnail" />
					<div>
						<span className={styles.badge}>John smash</span> <span>5min</span>
						<h3>Lorem Ipsum is simply dummy text dummy text?</h3>
					</div>
				</div>
			</div>

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
}

export default News;
