const Utils = require("../utils/commonUtils");

const sendReq = async (event) => {
    let timestamp = event.timestamp;
    timestamp = Math.floor(new Date(timestamp).getTime() / 1000);

    const restructuredObj = restructureObj(event);

    const response = await Utils.sendPutRequest(
        "https://sweeps.proxy.beeceptor.com//m0nit0r.com/track_ship/" + timestamp,
        restructuredObj
    );

    console.log(response);
};

const restructureObj = (obj) => {

    const processedObj = {};
    for (key in obj) {
        if (key !== "timestamp") processedObj[key] = obj[key];
    }
    return processedObj;
};

module.exports = {
    sendReq
};