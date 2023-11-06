import app from "../api/axios";

export const getData = () => {
  const getCargo = async () => {
    try {
      const response = await app.get("/cargo")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getCargoTodos = async () => {
    try {
      const response = await app.get("/cargo/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getSetor = async () => {
    try {
      const response = await app.get("/setor")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getSetorTodos = async () => {
    try {
      const response = await app.get("/setor/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuario = async () => {
    try {
      const response = await app.get("/usuario")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuarioTodos = async () => {
    try {
      const response = await app.get("/usuario/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getGrupo = async () => {
    try {
      const response = await app.get("/grupo")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getGrupoTodos = async () => {
    try {
      const response = await app.get("/grupo/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getMetas = async () => {
    try {
      const response = await app.get("/metas")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getMetasTodos = async () => {
    try {
      const response = await app.get("/metas/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuarioCargo = async () => {
    try {
      const response = await app.get("/usuariosCargos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuarioCargoTodos = async () => {
    try {
      const response = await app.get("/usuariosCargos/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuarioGrupo = async () => {
    try {
      const response = await app.get("/usuariosGrupos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }

  const getUsuarioGrupoTodos = async () => {
    try {
      const response = await app.get("/usuariosGrupos/todos")
      return response.data
    } catch (error){
      console.log( {error} )
      return {error}
    }
  }



  return {
    getCargo,
    getCargoTodos,
    getGrupo,
    getGrupoTodos,
    getMetas,
    getMetasTodos,
    getUsuario,
    getUsuarioTodos,
    getSetor,
    getSetorTodos,
    getUsuarioCargo,
    getUsuarioCargoTodos,
    getUsuarioGrupo,
    getUsuarioGrupoTodos
  }
}
