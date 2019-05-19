const request = require('supertest')
const app = require('../server')

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 5000)); // avoid jest open handle error
})

describe('Server should', () => {
    it('send a status 200', async (done) => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        done()
    })
})