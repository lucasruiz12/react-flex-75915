import { productos } from "./productos";

export const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 3000);
});


// Fetch de APIs

/*

Solicitudes HTTP. elementos necesarios:

-URL (url base)
-Endpoint
-VERBO (la acción que queremos realizar): CRUD (CREATE, READ, UPDATE, DELETE) --> GET, POST, PUT, DELETE
-Headers para configuración o autenticación.

*/

// export const getAPI = (url) => {
//     return fetch(url).then(response => response.json()).catch(err => console.error(err));
// };


// export const postAPI = (url, body) => {
//     return fetch(url, {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }).then(response => response.json()).catch(err => console.error(err));
// } 