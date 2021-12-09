const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface Ioptions {
  method: string;
  headers: { "Content-Type": string };
  body: string;
}

export function fetchRequest(path: string, options?: Ioptions) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error("fetch request didnt work :( Error: ", err);
    });
}

export function options(method: string, body?: any) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
