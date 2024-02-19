/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("moods", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.bigInteger("user_id").unsigned();
    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("moods");
};
