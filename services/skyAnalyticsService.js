const Utils = require("../utils/commonUtils");

const sendReq = async (event) => {

    const restructuredObj = await restructureObj(event);

    const response = await Utils.sendPostRequest(
        "https://sweeps.proxy.beeceptor.com/skyanalytics/get",
        restructuredObj
    );

    console.log(response);
};

const restructureObj = async (obj) => {
    const mapcode = await Utils.sendGetRequest(
        "https://api.mapcode.com/mapcode/codes/" +
        obj["lat-lon"][0] +
        "," +
        obj["lat-lon"][1]
    );

    obj["lat-lon"] = mapcode.international.mapcode;

    const processedObj = {};
    for (key in obj) {
        if (key !== "t") {
            const capitalizedKey = key[0].toUpperCase() + key.slice(1);
            processedObj[capitalizedKey] = obj[key];
        } else {
            processedObj[key] = obj[key];
        }
    }
    return processedObj;
};

module.exports = {
    sendReq
};