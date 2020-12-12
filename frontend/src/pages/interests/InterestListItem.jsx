import "./InterestListItem.css"
import React from "react"
import { removeInterests } from "../../model/requests.js"

export default function InterestListItem(props) {
  const { info, setRefetch } = props

  const handleOnClick = async () => {
    const res = await removeInterests(info)
    if (res.ok) {
      setRefetch(true)
      alert("Imóvel reservado com sucesso!")
    } else {
      alert(res.message)
    }
  }

  return (
    <div className="ListItem">
      <div className="InterestData">
        <p>{`Cód. Imóvel: ${info.nr_inscricao}`}</p>
        <p>{`Interessado: ${info.nome}`}</p>
        <p>{`Tel: ${info.telefone}`}</p>
      </div>
      <button onClick={handleOnClick}>Reservar</button>
    </div>
  )
}
