function Card({nome, tipo, preco, qt}) {
	return (
		<div>
			<h4>{nome}</h4>
			<h5>Tipo:{tipo}</h5>
			<h5>Valor: {preco}</h5>
			<h5>Quantidade em estoque:{qt}</h5>
		</div>
	);
}

export default Card