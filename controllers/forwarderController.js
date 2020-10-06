const SpaceshipService = require('../services/spaceshipService');
const M0nit0rService = require('../services/m0nit0rService');
const SkyAnalyticsService = require('../services/skyAnalyticsService');

exports.forwardRequests = (req, res) => {
    const events = req.body.events;

    if (!events || typeof events != 'object' || !Array.isArray(events)) {
        res.status(500).send("Incorrect input format \n");
        return;
    }

    try {
        events.forEach((eachEvent) => {
            SpaceshipService.sendReq(eachEvent);
            M0nit0rService.sendReq(eachEvent);
            SkyAnalyticsService.sendReq(eachEvent);
        });

    } catch (error) {
        console.log(error);
    }

    res.status(200).send("Request processed successfully \n");
};