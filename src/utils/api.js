import { Promise } from 'es6-promise';
import Request from 'superagent';

const Api = {
  getNeo: (url) => new Promise((resolve, reject) => {
    Request
      .get(url)
      .auth('neo4j', 'neo')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          resolve(JSON.parse(res.text));
        }
      });
  }),
  postNeo: (url, payload) => new Promise((resolve, reject) => {
    Request
      .post(url)
      .auth('neo4j', 'neo')
      .set('Content-Type', 'application/json')
      .send(
        payload
      )
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          if (res.text === '') {
            resolve('DONE');
          } else {
            resolve(JSON.parse(res.text));
          }
        }
      });
  }),
  putNeo: (url, payload) => new Promise((resolve, reject) => {
    Request
      .put(url)
      .auth('neo4j', 'neo')
      .set('Content-Type', 'application/json')
      .send(
        payload
      )
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          resolve(res.text);
        }
      });
  }),
  get: (url) => new Promise((resolve, reject) => {
    Request
      .get(url)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('Accept', 'application/json; charset=UTF-8')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          resolve(JSON.parse(res.text));
        }
      });
  }),
  post: (url, payload) => new Promise((resolve, reject) => {
    Request
      .post(url)
      .set('Content-Type', 'application/json')
      // .auth(params.auth.username, params.auth.password)
      .send(payload)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          resolve(JSON.parse(res.text));
        }
      });
  }),
  put: (url, payload) => new Promise((resolve, reject) => {
    Request
      .put(url)
      .set('Content-Type', 'application/json')
      // .auth(params.auth.username, params.auth.password)
      .send(payload)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          reject({ error: err, response: res });
        } else {
          resolve(JSON.parse(res.text));
        }
      });
  }),
  traverseDefault: {
    relationships: [{
      type: 'for',
      direction: 'out'
    }, {
      type: 'has',
      direction: 'out'
    }]
  }
};

export default Api;
