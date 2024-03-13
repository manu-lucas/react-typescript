import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Verificación de tipo para 'error'
  let errorMessage = "";
  if (error instanceof Error) { // Verifica si 'error' es una instancia de 'Error'
    errorMessage = error.message; // Ahora es seguro acceder a 'error.message'
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
