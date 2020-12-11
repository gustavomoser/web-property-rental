import "./Login.css"
import { FiEyeOff, FiEye } from "react-icons/fi"
import React, { useState } from "react"
import { login } from "../../model/requests"
import Header from "../../components/header/Header.jsx"
import { useHistory } from "react-router-dom"

export default function Login(props) {
  const { setInfo } = props
  const history = useHistory()

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
    if (!username && !password) {
      alert("Preencha os campos corretamente")
    } else {
      const response = await login({ username, password })
      if (!response?.ok) {
        alert(response.message)
      } else {
        alert("Login efetuado com sucesso")
        console.log(response.data)
        setInfo({
          logged: response.ok,
          username: response.data.username,
          name: response.data.name,
          first: response.data.firstLogin,
        })
        history.push(response.data.firstLogin ? "/reset" : "/")
      }
    }
  }

  const handleClickSee = (e) => {
    e.preventDefault()
    setSee(!see)
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
            <button className="button-eye" onClick={handleClickSee}>
              {see ? <FiEye /> : <FiEyeOff />}
            </button>
            <div className="button-group">
              <button className="goback-button" onClick={handleVoltar}>
                Voltar
              </button>
              <button type="submit" className="tosubmit-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
