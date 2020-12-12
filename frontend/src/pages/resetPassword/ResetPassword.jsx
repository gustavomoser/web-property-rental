import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { reset } from "../../model/requests"
import { FiEyeOff, FiEye } from "react-icons/fi"
import "./ResetPassword.css"
import React from "react"

export default function ResetPassword(props) {
  const history = useHistory()
  const { info, setInfo } = props
  const [seeFirst, setSeeFirst] = useState(false)
  const [seeSecond, setSeeSecond] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [formData, setFormData] = useState({
    password: "",
    confirm: "",
  })

  useEffect(() => {
    if (!formData.password || !formData.confirm) {
      setPasswordMatch(true)
    } else if (formData.password || formData.confirm) {
      if (formData.password !== formData.confirm) {
        setPasswordMatch(false)
      } else {
        setPasswordMatch(true)
      }
    }
  }, [formData, formData.password, formData.confirm, setPasswordMatch])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { password } = formData
    const response = await reset({ username: info.username, password })

    if (!response?.ok) {
      alert(response.message)
    } else {
      alert("Senha alterada com sucesso")
      setInfo({ ...info, first: false })
      history.push("/")
    }
  }

  const handleVoltar = (event) => {
    event.preventDefault()
    history.goBack()
  }

  return (
    <div class="container">
      <div class="register">
        <p class="title-register">Alterar senha:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Digite a nova senha:</label>
          {!seeFirst ? (
            <input type="password" name="password" placeholder="Nova senha..." onChange={handleInputChange} />
          ) : (
            <input type="text" name="password" placeholder="Nova senha..." onChange={handleInputChange} />
          )}
          <button class="button-eye" onClick={() => setSeeFirst(!seeFirst)}>
            {seeFirst ? <FiEye /> : <FiEyeOff />}
          </button>
          <br />
          <label htmlFor="password">Confirme a nova senha:</label>
          {!seeSecond ? (
            <input type="password" name="confirm" placeholder="Nova senha..." onChange={handleInputChange} />
          ) : (
            <input type="text" name="confirm" placeholder="Nova senha..." onChange={handleInputChange} />
          )}
          <button class="button-eye" onClick={() => setSeeSecond(!seeSecond)}>
            {seeSecond ? <FiEye /> : <FiEyeOff />}
          </button>
          <br />
          {!passwordMatch && <label style={{ color: "red" }}>Senhas não correspondem</label>}
          <div className="button-group">
            <button className="goback-button" onClick={handleVoltar}>
              Voltar
            </button>
            <button type="submit" className="tosubmit-button">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
