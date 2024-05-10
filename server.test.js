const request = require('supertest');
const app = require('./server');

describe('GET /time endpoint', () => {
    it('should return the current UTC time', async () => {
        const response = await request(app).get('/time');
        expect(response.statusCode).toBe(200);
        expect(response.body.currentTime).toBeDefined();
    });

    it('should return the adjusted time when a valid timezone is provided', async () => {
        const timezone = 'America/New_York';
        const response = await request(app).get(`/time?timezone=${timezone}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.adjustedTime).toBeDefined();
    });

    it('should not return an adjusted time when an invalid timezone is provided', async () => {
        const timezone = 'Invalid/Timezone';
        const response = await request(app).get(`/time?timezone=${timezone}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.adjustedTime).toBeFalsy();
    });
});
