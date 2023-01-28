import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__wrapper}>
				<div className={styles.footer__main}>Footer</div>
				<article className={styles.footer__content}>
					<div>Выполнил: Белоконь Сергей</div>
				</article>
			</div>
		</footer>
	);
}

export default Footer;
