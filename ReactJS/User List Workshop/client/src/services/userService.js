const BaseUrl = 'http://localhost:3030/jsonstore/users/';

export const getOne = async (userId) => {
    const response = await fetch(`${BaseUrl}/${userId}`);
    const result = await response.json();

    return result;
}

export const getAll = async function () {



    const response = await fetch(BaseUrl);
    const data = await response.json();

    return Object.values(data);

};


export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        }
    }

    const response = await fetch(BaseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
    })

    const result = await response.json();

    return result;
};

export const remove = async (userId) => {
    const response = await fetch(`${BaseUrl}/${userId}`, {
        method: 'DELETE',
    });

    const result = await response.json();
    return result;
}