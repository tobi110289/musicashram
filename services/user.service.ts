const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { IUser } from "../interfaces/user";

interface Ioptions {
  method: string;
  headers: { "Content-Type": string };
  body: string;
}

function fetchRequest(path: string, options?: Ioptions) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error("fetch request didnt work :( Error: ", err);
    });
}

function options(method: string, body: any) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

const ApiService = { getAllUsers };

export default ApiService;
