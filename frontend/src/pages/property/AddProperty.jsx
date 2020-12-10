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

  const handleSubmit = (event) => {}

  return (
    <div className="Login">
      <Header />
      <div className="container">
        <div className="register">
          <p className="title-register">Faça seu login:</p>
          <form onSubmit={handleSubmit}>
            <input type="number" name="nrInscricao" onChange={handleInputChange} />
            <input name="descricao" onChange={handleInputChange} />
            <input name="endereco" onChange={handleInputChange} />
            <fieldset>
              <legend>
                <h2>Tipo do imóvel</h2>
              </legend>
              <div>
                <label htmlFor="casa">Casa</label>
                <input type="radio" name="casa" value="casa" checked={type === "casa"} />
              </div>
              <div>
                <label htmlFor="apto">Apartamento</label>
                <input type="radio" name="apto" value="apartamento" checked={type === "apartamento"} />
              </div>
            </fieldset>
            <input type="number" name="nrQuartos" onChange={handleInputChange} />
            <input type="number" name="nrBanheiros" onChange={handleInputChange} />
            <input type="number" name="nrGaragens" onChange={handleInputChange} />
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
