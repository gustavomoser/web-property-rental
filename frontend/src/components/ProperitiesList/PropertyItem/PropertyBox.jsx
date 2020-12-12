import "./PropertyBox.css"

export default function PropertyBox(props) {
  const { data } = props
  return (
    <div className="container-post">
      <div className="header-post">
        <p className="title-post">{data.titulo}</p>
      </div>
      <div className="content-post">
        <img className="image-post" src="imagens/casa1.jpg" />
        <div className="info-post">
          <p className="status available">{data.status}</p>
          <p>{`Endereço: ${data.endereco}`}</p>
          <p>{`Dormitorios: ${data.dormitorios}`}</p>
          <p>{`Banheiros: ${data.banheiros}`}</p>
          <p>{`Vagas na garagem: ${data.vagas}`}</p>
          <p>{`Valor do aluguel: R$${data.valor}`}</p>
        </div>
      </div>
    </div>
  )
}
