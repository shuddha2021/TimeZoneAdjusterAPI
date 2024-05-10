const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    let adjustedTime;

    if (req.query.timezone) {
        if (moment.tz.zone(req.query.timezone)) {
            adjustedTime = moment.utc().tz(req.query.timezone).format();
        } else {
            adjustedTime = null;
        }
    }

    res.json({
        currentTime,
        ...(adjustedTime !== null && { adjustedTime })
    });
});

module.exports = app;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
