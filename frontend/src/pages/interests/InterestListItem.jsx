import "./InterestListItem.css"
import React from "react"
import Header from "../../components/header/Header.jsx"
import { removeInterests } from "../../model/requests.js"

export default function InterestListItem(props) {
  const { info, setRefetch } = props

  const handleOnClick = async () => {
    const newList = await removeInterests(info)
    setRefetch(true)
    alert("Interesse removido com sucesso!")
  }

  return (
    <div className="ListItem">
        <div className="InterestData">
            <p>{`Cód. Imóvel: ${info.nr_inscricao}`}</p>
            <p>{`Interessado: ${info.nome}`}</p>
            <p>{`Tel: ${info.telefone}`}</p>
        </div>
        <button onClick={handleOnClick}>Remover</button>
    </div>
  )
}
