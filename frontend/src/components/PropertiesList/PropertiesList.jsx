import "./PropertiesList.css"
import PropertyBox from "./PropertyItem/PropertyBox.jsx"
import React from "react"

export default function PropertiesList(props) {
  const { properties } = props

  const convertToListItemObject = (item) => {
    console.log(item)
    return {
      titulo:item.titulo,
      endereco:item.endereco,
      dormitorios:item.nr_dormitorios,
      banheiros:item.nr_banheiros,
      vagas:item.nr_vagas_garagem,
      valor:item.valor,
      situacao:item.situacao,
    }
  }

  return (
    <div className="post-list">
      {properties?.length > 0 ? properties.map((item, index) => <PropertyBox data={convertToListItemObject(item)} key={index}/>) : "Nenhum imóvel cadastrado"}
    </div>
  )
}
