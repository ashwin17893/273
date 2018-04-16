const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const toadd = (payload) =>
    fetch(`${api}/things/add`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(payload);
            return response;
            /*.then(res => {
            console.log(res);
            return res.status;*/
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const tosub = (payload) =>
    fetch(`${api}/things/sub`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(payload);
            return response;
            /*.then(res => {
            console.log(res);
            return res.status;*/
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const tomul = (payload) =>
    fetch(`${api}/things/mul`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(payload);
            return response;
            /*.then(res => {
            console.log(res);
            return res.status;*/
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const todiv = (payload) =>
    fetch(`${api}/things/div`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            console.log(payload);
            return response;
            /*.then(res => {
            console.log(res);
            return res.status;*/
        })
        .catch(error => {
            console.log("This is error");
            return error;
        });