import "./Interests.css"
import React from "react"
import Header from "../../components/header/Header.jsx"

export default function InterestListItem(props) {
  const { info } = props
  return (
    <div className="ListItem">
        <div className="InterestData">
            <p>{`Cód. Imóvel: ${info.nr_inscricao}`}</p>
            <p>{`Interessado: ${info.nome}`}</p>
            <p>{`Tel: ${info.telefone}`}</p>
        </div>
        <button>Remover</button>
    </div>
  )
}
