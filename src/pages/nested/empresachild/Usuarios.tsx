import React from "react";
import { useStore } from "../../../store/useStore";
import { Link } from "react-router-dom";
import {
   useQuery
} from '@tanstack/react-query'
import {getProducts} from "../../../api/Request"



const Usuarios: React.FC = () => {
  const { bears, increase} = useStore((state) => ({
    bears: state.bears,
    increase: state.increase,
    // getPost: state.getPosts,
    // posts: state.posts,
  }));

  const {isLoading,data,isError,error}= useQuery({
    queryKey:['products'],
    queryFn: getProducts
  })

if(isLoading)return <div>Loading...</div>
else if (isError) return <div>Error:{error.message}</div>

  // useEffect(() => {
  //   getPost();
  // }, []);
  // console.log(posts);

  return (
    <div className="h-screen w-85 bg-green-200">
      <h2>Usuarios</h2>

      <h3>{bears}</h3>
      <button onClick={() => increase(2)}>incrementar</button>

      <div className="block"></div>

      <Link to="/miempresa/productos">ir a</Link>
    </div>
  );
};

export default Usuarios;
