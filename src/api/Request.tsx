import axios from "axios";

 const peticionApi = axios.create({
    baseURL :"https://jsonplaceholder.typicode.com"
})

const peticionServidor = axios.create({
    baseURL :"http://localhost:3030"
})




/* example  */
export const getProducts = async()=>{
    const res = await peticionApi.get('/posts')
    return res.data
}

/*   useMutation  modificar datos del backend*/


export const getOperaciones = async()=>{
    const res = await peticionServidor.get('/posts')
    return res.data
}