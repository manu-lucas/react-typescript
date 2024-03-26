import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import { DateProvider } from "./components/Contexts/DateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <DateProvider>
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </DateProvider>
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
