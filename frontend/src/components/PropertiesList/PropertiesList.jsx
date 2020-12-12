import "./PropertiesList.css"
import PropertyBox from "./PropertyItem/PropertyBox.jsx"
import React from "react"

export default function PropertiesList(props) {
  const { properties, logged, setRefetch } = props

  const convertToListItemObject = (item) => {
    return {
      nr_inscricao: item.nr_inscricao,
      imagem: item.img,
      titulo: item.titulo,
      endereco: item.endereco,
      dormitorios: item.nr_dormitorios,
      banheiros: item.nr_banheiros,
      vagas: item.nr_vagas_garagem,
      valor: item.valor,
      situacao: item.situacao,
    }
  }

  return (
    <div className="post-list">
      {properties?.length > 0
        ? properties.map((item, index) => (
          <PropertyBox data={convertToListItemObject(item)} key={index} logged={logged} setRefetch={setRefetch} />
        ))
        : "Nenhum imóvel cadastrado"}
    </div>
  )
}
