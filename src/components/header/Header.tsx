import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__wrapper}>
				<div className={styles.header__main}>Компания ЛОТОС</div>
				<article className={styles.header__content}>
					<div>Тестовое задание на позицию Junior Frontend Developer</div>
				</article>
			</div>
		</header>
	);
}

export default Header;
