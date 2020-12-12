import "./PropertyBox.css"
import React, { useState } from "react"
import { registerInterest, updateSituation } from "../../../model/requests"

export const defaultInterest = {
  nome: "",
  telefone: "",
}

export default function PropertyBox(props) {
  const { data, logged, setRefetch } = props
  const [interestSend, setInterestSend] = useState(false)
  const [interest, setInterest] = useState(defaultInterest)
  const [status, setStatus] = useState(data.situacao)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!interest.nome || !interest.telefone) {
      alert("Preencha todos os campos.")
    } else {
      const response = await registerInterest({ ...interest, nr_inscricao: data.nr_inscricao })
      if (response.ok) {
        alert("Interesse registrado com sucesso!")
        setInterestSend(true)
        setInterest({ ...defaultInterest, nr_inscricao: data.nr_inscricao })
      } else {
        alert(response.message)
      }
    }
  }

  const handleSubmitUpdate = async (event) => {
    event.preventDefault()
    if (!status) {
      alert("É necessário escolher uma situação para atualizar")
    } else {
      const response = await updateSituation({ nr_inscricao: data.nr_inscricao, situacao: status })
      if (response.ok) {
        alert("Situação atualizada com sucesso!")
        setRefetch(true)
      } else {
        alert(response.message)
      }
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInterest({ ...interest, [name]: value })
  }

  const handleSelectChange = (event) => {
    const { value } = event.target
    setStatus(value)
  }

  return (
    <div className="container-post">
      <div className="header-post">
        <p className="title-post">{data.titulo}</p>
      </div>
      <div className="content-post">
        <img className="image-post" src={`data:image/jpg;base64, ${data.imagem}`} />
        <div className="info-post">
          <span className={data.situacao === "disponivel" ? "status available" : "status"}>
            {data.situacao.toUpperCase()}
          </span>
          <span>{`Endereço: ${data.endereco}`}</span>
          <span>{`Dormitorios: ${data.dormitorios}`}</span>
          <span>{`Banheiros: ${data.banheiros}`}</span>
          <span>{`Vagas na garagem: ${data.vagas}`}</span>
          <span>{`Valor do aluguel: R$${data.valor}`}</span>
          <div>
            {logged ? (
              <div>
                <label for="status">Altere o status do imóvel:</label>
                <form onSubmit={handleSubmitUpdate}>
                  <select name="status" onChange={handleSelectChange} style={{ marginRight: "1rem" }}>
                    <option value="disponivel">Disponível</option>
                    <option value="reservado">Reservado</option>
                    <option value="alugado">Alugado</option>
                    <option value="indisponivel">Indisponível</option>
                  </select>
                  <button type="submit">Atualizar</button>
                </form>
              </div>
            ) : !interestSend ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <input name="nome" placeholder="Nome completo" onChange={handleInputChange} />
                  <br />
                  <input name="telefone" placeholder="Telefone para contato" onChange={handleInputChange} />
                  <br />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            ) : (
                  <span> Você já registrou seu interesse para este imóvel.</span>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}
