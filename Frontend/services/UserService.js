const fetch = require('node-fetch');
import axios from 'axios';


export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data })
    })
    return await response.json();
}

export async function trial() {
    const response = await fetch('/api/udit');
    console.log(response);
    return await response.json();
}

// export async function t1() {
//     const response = await fetch('/api/hello')
//     console.log("HIIIIII")
//     console.log(response);
//     return await response.json();
// }
export async function t2() {
    try {
        console.log("Hellloooooooooooooo")
        const response  = await fetch('/api/fruits')
        console.log(response);
        console.log("UDITkvkndk");
        return await response;
    } catch (error) {
        console.log(error);
        console.log("not working")
    }

}

export async function t3() {
    try {
        console.log("Hellloooooooooooooo")
        const { response } = await axios.get('/api/fruits')
        console.log("UDITkvkndk");
        console.log(response);
       
        // return await response.json();
    } catch (error) {
        console.log(error);
        console.log("not working")
    }

}
