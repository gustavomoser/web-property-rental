import { useState } from "react"

export default function AddProperty(props) {
  const [formData, setFormData] = useState({
    nrInscricao: "",
    descricao: "",
    endereco: "",
    tipo: "",
    nrQuartos: "",
    nrBanheiros: "",
    nrGaragens: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    if (!nrInscricao ||
      !descricao ||
      !endereco ||
      !tipo ||
      !nrQuartos ||
      !nrBanheiros ||
      !nrGaragens || !valor) {
      alert("Preencha os campos corretamente")
    } else {
      const response = await addProperty({ nrInscricao,
        descricao,
        endereco,
        tipo,
        nrQuartos,
        nrBanheiros,
        nrGaragens, 
        valor })
      if (!response?.ok) {
        alert(response.message)
      } else {
        alert("Imóvel salvo com sucesso!")
        history.push("/")
      }
    }

  }

  return (
    <div className="Login">
      <Header />
      <div className="container">
        <div className="register">
          <p className="title-register">Cadastre um imóvel:</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="nrInscricao" onChange={handleInputChange} />
            <input name="descricao" onChange={handleInputChange} />
            <input name="endereco" onChange={handleInputChange} />
            <fieldset>
              <legend>
                <h2>Tipo do imóvel:</h2>
              </legend>
              <div>
                <label htmlFor="tipo">Casa</label>
                <input type="radio" name="tipo" value="casa" checked={type === "casa"} />
              </div>
              <div>
                <label htmlFor="tipo">Apartamento</label>
                <input type="radio" name="tipo" value="apartamento" checked={type === "apartamento"} />
              </div>
            </fieldset>
            <label htmlFor="nrQuartos">Numero de quartos:</label>
            <input type="number" name="nrQuartos" onChange={handleInputChange} />
            <label htmlFor="nrBanheiros">Numero de banheiros:</label>
            <input type="number" name="nrBanheiros" onChange={handleInputChange} />
            <label htmlFor="nrGaragens">Numero de vagas na garagem:</label>
            <input type="number" name="nrGaragens" onChange={handleInputChange} />
            <label htmlFor="valor">Valor:</label>
            <input type="number" name="valor" onChange={handleInputChange} />
            <div>
              <button className="submit-button">Cancelar</button>
              <button type="submit" className="submit-button">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
