exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'gibson',
      name: 'Brad Gibson',
      password: 'firewall',
      email: 'brad.gibson@example.com',
      role_id: 1,
    },
    {
      username: 'kennedy',
      name: 'Karl Kennedy',
      password: 'mortimer',
      email: 'karl.kennedy@example.com',
      role_id: 2,
    },
    {
      username: 'steeves',
      name: 'Gavin Steeves',
      password: 'windows1',
      email: 'gavin.steeves@example.com',
      role_id: 1,
    },
    {
      username: 'test',
      name: 'tester testing',
      password: 'test',
      email: 'test@example.com',
      role_id: 1,
    },
  ]);
};
