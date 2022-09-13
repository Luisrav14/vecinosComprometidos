import axios from "axios";
export const getAsambleasRequest = async ()=> 
  await  axios.get("http://localhost:5000/asamblea/mostrarTodos")

export const createAsambleasRequest = async (asambleas)=>
await axios.post("http://localhost:5000/asamblea/mostrarTodos",asambleas);