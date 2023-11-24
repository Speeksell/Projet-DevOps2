// test.js
const request = require('supertest');
const app = require('./server');

describe('Test du point d\'entrée racine', () => {
  test('Il doit répondre à la requête GET', done => {
    request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
