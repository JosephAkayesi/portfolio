const request = require('supertest')
const { app } = require('../../../server')

afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 5000)); // avoid jest open handle error
})

describe('Bio should: /api/bio/test', () => {
    it('send a status 200', async (done) => {
        const res = await request(app).get('/api/bio/test')
        expect(res.status).toBe(200)
        done()
    })

    it('send an object', async (done) => {
        const res = await request(app).get('/api/bio/test')
        expect(typeof res.body).toBe('object')
        done()
    })

    it('send { msg: \'Bio route works\' } ', async (done) => {
        const res = await request(app).get('/api/bio/test')
        expect(res.body).toEqual({ msg: 'Bio route works' })
        done()
    })
})

describe('Bio should: /api/bio', () => {
    it('send an object', async (done) => {
        const res = await request(app).get('/api/bio')
        expect(typeof res.body).toBe('object')
        done()
    })

    it('send an object with propertues: { _id, introduction, body, conclusion, social: {twitter, facebook, github, medium, linkedin} }', async (done) => {
        const res = await request(app).get('/api/bio')
        expect(res.body[0]).toHaveProperty('_id')
        expect(res.body[0]).toHaveProperty('introduction')
        expect(res.body[0]).toHaveProperty('body')
        expect(res.body[0]).toHaveProperty('conclusion')
        expect(res.body[0]).toHaveProperty('social')
        expect(res.body[0]).toHaveProperty('social.twitter')
        expect(res.body[0]).toHaveProperty('social.facebook')
        expect(res.body[0]).toHaveProperty('social.github')
        expect(res.body[0]).toHaveProperty('social.medium')
        expect(res.body[0]).toHaveProperty('social.linkedin')
        done()
    })
})