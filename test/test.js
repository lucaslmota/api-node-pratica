const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('Teste GET', () => {
    it('deve receber os jogos da api', done => {
        chai.request(app)
            .get('/projects')
            .end((err, res) => {
                res.should.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});