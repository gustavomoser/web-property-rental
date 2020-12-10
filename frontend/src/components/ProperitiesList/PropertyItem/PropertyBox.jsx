import "./PropertyBox.css"

export default function PropertyBox(props) {
  const { data } = props
  return (
    <div class="container-post">
      <div class="header-post">
        <p class="title-post">{data.titulo}</p>
      </div>
      <div class="content-post">
        <img class="image-post" src="imagens/casa1.jpg" />
        <div class="info-post">
          <p class="status available">{data.status}</p>
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
