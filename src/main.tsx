import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
<<<<<<< HEAD
          <QueryClientProvider client={queryClient}>
      <DateProvider>
        <App />
          <QueryClientProvider client={queryClient}>
      <DateProvider>
        <App />
        </DateProvider>
            </QueryClientProvider>
            </QueryClientProvider>
=======
      <QueryClientProvider client={queryClient}>
            <App />
      </QueryClientProvider>
>>>>>>> 65a10568c15215127650cee011d629d2952db315
    </NextUIProvider>
  </React.StrictMode>
);
