import "./Interests.css"
import React, { useState, useEffect } from "react"
import Header from "../../components/header/Header.jsx"
import ListItem from "./InterestListItem.jsx"
import { getInterests } from "../../model/requests"

export default function Interests(props) {
  const { info, setInfo } = props
  const [refetch, setRefetch] = useState(false)
  const [interests, setInterests] = useState()
  useEffect(async () => {
    const response = await getInterests()
    const list = [...response]
    setInterests(list)
  }, [])

  useEffect(async () => {
    if (refetch) {
        const response = await getInterests()
        const list = [...response]
        setInterests(list)
        setRefetch(false)
        console.log(list)
    }
  }, [refetch])
  
  console.log(interests)

  return (
    <div className="Interests">
        <Header info={info} setInfo={setInfo} />
        <div className="List">
            <h1>Lista de Interesses</h1>
            {interests?.length > 0 ? interests.map((item, index) => <ListItem info={item} key={index} setRefetch={setRefetch}/>) : "Não há ninguém interessado :("}
        </div>
    </div>
  )
}
