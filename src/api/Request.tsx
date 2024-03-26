import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const peticionServidor = axios.create({
  baseURL: "http://localhost:3030",
});

const getOperaciones = async () => {
  const res = await peticionServidor.get("/posts");
  return res.data;
};

export function useGetOperaciones() {
  return useQuery({ queryKey: ["resPost"], queryFn: getOperaciones });
}

const getBank = async () => {
  const res = await peticionServidor.get("/banks");
  return res.data;
};

export function getResBank() {
  return useQuery({ queryKey: ["getbank"], queryFn: getBank });
}

const getUser = async () => {
  const res = await peticionServidor.get("/usuarios");
  return res.data;
};

export function getResUsuarios() {
  return useQuery({ queryKey: ["usuarios"], queryFn: getUser });
}