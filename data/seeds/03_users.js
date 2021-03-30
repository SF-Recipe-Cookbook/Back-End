exports.seed = function (knex) {
  return knex('users').insert([
    {
      username: 'test',
      password: 'password',
      email: 'test@test.com',
      avatar: 'http://test.com/test',
      role_id: 1,
    },
    {
      username: 'test1',
      password: 'password',
      email: 'test1@test.com',
      avatar: 'http://test.com/test',
      role_id: 2,
    },
    {
      username: 'test2',
      password: 'password',
      email: 'test2@test.com',
      avatar: 'http://test.com/test',
      role_id: 1,
    },
  ]);
};
