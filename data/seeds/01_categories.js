exports.seed = function (knex) {
  return knex('category').insert([
    { name: 'Breakfast' },
    { name: 'Lunch' },
    { name: 'Dinner' },
    { name: 'Snacks' },
    { name: 'Drinks' },
    { name: 'Desert' },
  ]);
};
