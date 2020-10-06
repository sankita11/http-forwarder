const Utils = require("../utils/commonUtils");

const sendReq = async (event) => {
    const restructuredObj = restructureObj(event);

    const response = await Utils.sendPostRequest(
        "https://sweeps.proxy.beeceptor.com/spaceship/r",
        restructuredObj
    );

    console.log(response);
};

const restructureObj = (obj) => {
    const flattenedObj = {};
    for (const key in obj) {
        if (typeof obj[key] == "object" && obj[key] != null) {
            if (Array.isArray(obj[key])) {
                let flattenedArrStr = obj[key].reduce(
                    (str, eachElem) => (str += eachElem + ","),
                    ""
                );
                flattenedArrStr = flattenedArrStr.replace(/,$/, "");
                flattenedObj[key] = flattenedArrStr;
            } else {
                for (const childKey in obj[key]) {
                    flattenedObj[key + "." + childKey] = obj[key][childKey];
                }
            }
        } else {
            flattenedObj[key] = obj[key];
        }
    }
    return flattenedObj;
};

module.exports = {
    sendReq
};