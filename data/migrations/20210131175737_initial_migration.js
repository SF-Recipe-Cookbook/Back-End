exports.up = function (knex) {
  return knex.schema
    .createTable('roles', (tbl) => {
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
    })
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username', 128).notNullable().unique().index();
      tbl.string('password', 256).notNullable();
      tbl.string('email', 256).notNullable();
      tbl.string('avatar', 256);
      tbl
        .integer('role_id')
        .unsigned()
        .references('roles.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .defaultTo(2);
    })
    .createTable('category', (tbl) => {
      tbl.increments();
      tbl.string('name', 256).notNullable();
    })
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('category_id')
        .unsigned()
        .references('category.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('name', 256).notNullable();
      tbl.string('description', 256).notNullable();
      tbl.string('ingredients', 256).notNullable();
      tbl.string('instructions', 256).notNullable();
      tbl.integer('prep_time').notNullable();
      tbl.integer('cook_time').notNullable();
      tbl.string('image_url', 256);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('category')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');
};
