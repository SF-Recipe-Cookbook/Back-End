exports.up = async (knex) => {
  await knex.schema.createTable('users', (users) => {
    users.increments('id');
    users.string('username', 200).notNullable().unique();
    users.string('password', 200).notNullable();
    users.string('email', 320).notNullable().unique();
    users.timestamps(false, true);
  });
  await knex.schema.createTable('recipes', (recipes) => {
    recipes.increments('id');
    recipes.string('name', 200).notNullable().unique();
    recipes.string('category', 200).notNullable();
    recipes.text('description').notNullable();
    recipes.text('ingredients').notNullable();
    recipes.text('instructions').notNullable();
    recipes.integer('prep_time').notNullable();
    recipes.integer('cook_time').notNullable();
    recipes.timestamps(false, true);
    recipes
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .onUpdate('cascade');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('recipes');
  await knex.schema.dropTableIfExists('users');
};
