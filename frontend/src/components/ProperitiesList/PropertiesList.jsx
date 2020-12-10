import "./PropertiesList.css"
import PropertyBox from "./PropertyBox/PropertyBox"

export default function PropertiesList(props) {
  const { properties } = props

  const convertToListItemObject = (item) => {
    return {
      titulo,
      endereco,
      dormitorios,
      banheiros,
      vagas,
      valor,
      situacao,
    }
  }

  return (
    <div class="post-list">
      {properties ? properties.map((item) => <PropertyBox data={convertToListItemObject(item)} />) : "Nenhum imóvel cadastrado"}
    </div>
  )
}
