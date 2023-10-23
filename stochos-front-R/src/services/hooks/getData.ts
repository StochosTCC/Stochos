import app from "../api/axios";

export function getCargo(){
  return app.get("/cargo")
}


export function getCargoTodos(){
  return app.get("/cargo/todos")
}
