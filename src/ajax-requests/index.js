const BASE_URL = 'http://localhost:3000/api'


export const registerUser = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user

        }),
        });
        const result = await response.json();

        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
}

export const login = async (user) => {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user,
        })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}
export const myData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const results = await response.json();
        return results;

    } catch (error) {
        console.log(error)
    }
}

