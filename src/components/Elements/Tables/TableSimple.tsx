import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

const TableSimple = () => {
  const data = [
    { 
      "id": 0,
      "name": "Agus Gomez",
      "cargo": null,
      "email": "agomez@wecom.global",
      "status": 1
    },
    {
      "id": 1,
      "name": "Erwin Rohrstock",
      "cargo": null,
      "email": "e.rohrstock@mundoparcelas.cl",
      "status": 1
    }
  ]

  const columns = [
    {
      header: "Usuario",
      accessorKey: "name" // Cambiado de "id" a "name"
    },
    {
      header: "Cargo",
      accessorKey: "cargo" // Ajustado a la propiedad correcta
    },
    {
      header: "Email",
      accessorKey: "email" // Ajustado a la propiedad correcta
    },
    {
      header: "Estado",
      accessorKey: "status" // Ajustado a la propiedad correcta
    },
    {
      header: "Acciones",
      accessorKey: "id" // Asumiendo que quieres mantener "id" para acciones
    }
  ]

  // Ajustado para pasar directamente getCoreRowModel sin llamarla
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(), // Aquí es donde estás teniendo problemas.
  })
  return (
    <div>
  
    </div>
  )
}

export default TableSimple; // Corregido el espacio extra antes del punto
