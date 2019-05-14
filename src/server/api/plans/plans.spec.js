const request = require('supertest');
const should = require('should');
const Myapp = require('../../app');
const app = Myapp.app;

describe('GET /plans', () => {
    it('should respond with plans', (done) => {
      request(app)
        .get('/plans')
        .expect(200)
        .end((err, res)=>{
          if(err){
            done(err);
            return;
          }
          res.body.should.be.an.instanceof(Array);
          res.body.map(plan => {
            plan.should.have.properties('id','title','content', 'date', 'priority', 'status', 'alarm');
          });
        });
        done();
    });
});


describe('POST /plans', () => {
    it('should respond with plan', (done) => {
      request(app)
        .post('/plans')
        .send({
          title: 'Develope TODOList',
          content: 'Complete 2019 summer coding'
        })
        .expect(201)
        .end((err, res)=>{
          if(err){
            done(err);
            return;
          }
          res.body.should.have.properties('title','content');
          res.body.title.should.equal('Develope TODOList');
          res.body.content.should.equal('Complete 2019 summer coding');
        });
        done();
    });
});
