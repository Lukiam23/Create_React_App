import styles from './Header.module.css'

function Header({img,alt}) {
	return (
		<div className={styles.headerContainer}>
			<h1>Rocket<span>Market</span></h1>
			<input type="text" />
		</div>
	);
}

export default Header