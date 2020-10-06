const fetch = require("node-fetch");

const sendPostRequest = async (url, postData) => {

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            },
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.log(response.statusText);
            return {};
        }
    } catch (error) {
        console.log(error);
        return {};
    }


};

const sendPutRequest = async (url, putData) => {

    try {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(putData),
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.log(response.statusText);
            return {};
        }
    } catch (error) {
        console.log(error);
        return {};

    }


};

const sendGetRequest = async (url) => {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.log(response.statusText);
            return {};
        }
    } catch (error) {
        console.log(error);
        return {};
    }

};

module.exports = {
    sendPostRequest,
    sendPutRequest,
    sendGetRequest,
};