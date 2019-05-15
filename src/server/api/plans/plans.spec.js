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

describe('PATCH /plans/title/:id/:title', () => {
  it('should respond with plan title', (done) => {
    request(app)
      .patch('/plans/1/title/Develope TODOList_1')
      .expect(200)
      .end((err, res)=>{
        if(err){
          done(err);
          return;
        }
        res.body.should.have.properties('title');
        res.body.title.should.equal('Develope TODOList_1');
      });
      done();
  });
});

describe('PATCH /plans/content/:id/:content', () => {
  it('should respond with plan content', (done) => {
    request(app)
      .patch('/plans/1/content/Complete 2019 Summer Coding')
      .expect(200)
      .end((err, res)=>{
        if(err){
          done(err);
          return;
        }
        res.body.should.have.properties('content');
        res.body.content.should.equal('Complete 2019 Summer Coding');
      });
      done();
  });
});


describe('DELETE /plans/:id', () => {
    it('should return 204 status code', (done) => {
      request(app)
        .delete('/plans/1')
        .expect(204)
        .end((err, res)=>{
          if(err){
            done(err);
            return;
          }
        });
        done();
    });
});


describe('PATCH /plans/date/:id/:date', () => {
  it('should respond with plan date', (done) => {
    request(app)
      .patch('/plans/1/date/2019-05-19 23:59:59')
      .expect(200)
      .end((err, res)=>{
        if(err){
          done(err);
          return;
        }
        res.body.should.have.properties('date');
        res.body.date.should.equal('2019-05-19 23:59:59');
      });
      done();
  });
});

describe('PATCH /plans/priority/:id/:priority', () => {
  it('should respond with plan priority', (done) => {
    request(app)
      .patch('/plans/1/priority/HIGH')
      .expect(200)
      .end((err, res)=>{
        if(err){
          done(err);
          return;
        }
        res.body.should.have.properties('priority');
        res.body.priority.should.equal('HIGH');
      });
      done();
  });
});

describe('PATCH /plans/status/:id/:status', () => {
  it('should respond with plan status', (done) => {
    request(app)
      .patch('/plans/1/status/Working on it')
      .expect(200)
      .end((err, res)=>{
        if(err){
          done(err);
          return;
        }
        res.body.should.have.properties('status');
        res.body.status.should.equal('Working on it');
      });
      done();
  });
});
