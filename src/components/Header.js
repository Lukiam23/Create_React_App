import styles from './Header.module.css'

function Header({img,alt}) {
	return (
		<header className={styles.headerContainer}>
			<img src={img} alt={alt} />
			<input type="text" />
		</header>
	);
}

export default Header