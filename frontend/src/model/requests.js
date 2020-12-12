export async function login(form) {
  const jsonData = JSON.stringify({ username: form.username, password: form.password })

  const resp = await window.fetch(`/login`, {
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

export async function reset(form) {
  const jsonData = JSON.stringify({ username: form.username, password: form.password })

  const resp = await window.fetch(`/reset`, {
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

export async function addProperty(form) {
  const jsonData = JSON.stringify({ ...form })

  const resp = await window.fetch(`/property`, {
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
  const jsonData = JSON.stringify({ ...filtroData })
  const resp = await window.fetch("/properties", {
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

export async function registerInterest(interest) {
  const jsonData = JSON.stringify({ ...interest })
  const resp = await window.fetch("/interest", {
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

export async function updateSituation(data) {
  const jsonData = JSON.stringify({ ...data })
  const resp = await window.fetch("/update", {
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

export async function getInterests() {
  const resp = await window.fetch('/interests')

  if (resp.ok === false) {
    throw new Error("Não foi possível acessar dados no servidor.")
  }
  const jsonResponse = await resp.json()

  return jsonResponse
}
