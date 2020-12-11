import "./Login.css"
import { FiEyeOff, FiEye } from "react-icons/fi"
import React, { useState } from "react"
import { login } from "../../model/requests"
import Header from "../../components/header/Header.jsx"

export default function Login(props) {
  const { setInfo } = props

  const [see, setSee] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { username, password } = formData
    const response = await login({ username, password })
    console.log(response)
    if (!response?.ok) {
      alert(response.message)
    } else {
      alert("Senha alterada com sucesso")
      history.push("/")
    }
  }

  const handleVoltar = () => history.push("/")

  return (
    <div className="Login">
      <Header />
      <div className="container">
        <div className="register">
          <p className="title-register">Faça seu login:</p>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Nome de usuário" onChange={handleInputChange} />
            {!see ? (
              <input type="password" name="password" placeholder="Senha" onChange={handleInputChange} />
            ) : (
              <input type="text" name="password" placeholder="Senha" onChange={handleInputChange} />
            )}
            <button class="button-eye" onClick={() => setSee(!see)}>
              {see ? <FiEye /> : <FiEyeOff />}
            </button>
            <div>
              <button className="submit-button" onClick={handleVoltar}>
                Voltar
              </button>
              <button type="submit" className="submit-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
