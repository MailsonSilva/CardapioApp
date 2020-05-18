const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('CLIENTE', () => {
  beforeEach(async()=>{
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async()=>{
    await connection.destroy();
  });

  it('should be able to create a new produto', async () => {
    const response = await request(app).post('/clientes').send({
      nome: "Maria ciclana",
      senha: 1234,
      telefone: "9893335555"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});