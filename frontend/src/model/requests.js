const URL = "https://localhost:3000"

export async function login(form) {
  const u = `${URL}/login/`
  const jsonData = JSON.stringify({ username: form.username, password: form.password })

  const resp = await window.fetch(u, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: jsonData,
  })

  if (resp.ok === false) {
    throw new Error("Não foi possível acessar dados no servidor.")
  }
  const jsonResponse = await resp.json()

  console.log(jsonResponse.ok)
  return jsonResponse
}

export async function reset(form) {
  const u = `${URL}/reset/`
  const jsonData = JSON.stringify({ username: form.username, password: form.password })

  const resp = await window.fetch(u, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: jsonData,
  })

  if (resp.ok === false) {
    throw new Error("Não foi possível acessar dados no servidor.")
  }
  const jsonResponse = await resp.json()

  return jsonResponse
}

export async function getProperties(filtroData) {
  const jsonData= JSON.stringify({...filtroData})
  console.log(window.location)
  const resp = await window.fetch('/properties', {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: jsonData,
  })

  if (resp.ok === false) {
    throw new Error("Não foi possível acessar dados no servidor.")
  }
  const jsonResponse = await resp.json()

  return jsonResponse
}
