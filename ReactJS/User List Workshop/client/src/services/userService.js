const BaseUrl = 'http://localhost:3030/jsonstore/users/';

export const getAll = async function () {


    try {
        const response = await fetch(BaseUrl);
        const data = await response.json();

        return Object.values(data);
    } catch (err) {
        console.log(err);
    }
}