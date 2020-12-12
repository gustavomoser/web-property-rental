import "./PropertyBox.css"
import React, { useState } from "react"
import { registerInterest } from "../../../model/requests"

export const defaultInterest = {
  nome: "",
  telefone: "",
}

export default function PropertyBox(props) {
  const { data, logged } = props
  const [interestSend, setInterestSend] = useState(false)
  const [interest, setInterest] = useState(defaultInterest)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!interest.nome || !interest.telefone) {
      alert("Preencha todos os campos.")
    } else {
      const response = await registerInterest(interest)
      if (response.ok) {
        alert("Interesse registrado com sucesso!")
        setInterestSend(true)
        setInterest({ ...defaultInterest, nrInterest: data.nrInscricao })
      } else {
        alert(response.message)
      }
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInterest({ ...interest, [name]: value })
  }

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
      <div>
        {logged ? (
          <span></span>
        ) : (
          interestSend && (
            <div>
              <form onSubmit={handleSubmit}>
                <input name="nome" onChange={handleInputChange} />
                <input name="telefone" onChange={handleInputChange} />
                <button type="submit">Enviar interesse</button>
              </form>
            </div>
          )
        )}
      </div>
    </div>
  )
}
