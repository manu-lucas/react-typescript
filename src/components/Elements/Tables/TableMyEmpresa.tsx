
interface CategoriaTableProps {
    categoria: string;
    datos: any[]; // Adjust the type according to the actual type of data
  }
function CategoriaTable({ categoria, datos }: CategoriaTableProps) {
  return (
    <table className="w-full mb-4">
      <thead className="bg-blue-500 text-white">
        <tr>
          <td colSpan={8} className="py-2 px-4 text-left border w-40">{categoria}</td>
        </tr>
      </thead>
      <tbody>
        {datos.map((e) => (
          <tr key={e.id} className="border-b">
            <td colSpan={3} className="py-2 px-4 text-left border w-40">
              <h3>{e.subcategoria}</h3>
            </td>
            <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.inactivo ? true : false} />{" "}
              </td>

              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.ver ? true : false} />{" "}
              </td>
              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.administrar ? true : false} />{" "}
              </td>
              <td colSpan={0} className="py-2 px-4 text-center  text-sm border">
                <input type="radio" checked={e.todo ? true : false} />{" "}
              </td>
              <td
                colSpan={0}
                className="py-2 px-4 text-center   text-sm border"
              >
                <input type="radio" checked={e.propietario ? true : false} />{" "}
              </td>          </tr>
        ))}
      </tbody>
    </table>
  );
}

  


export default CategoriaTable