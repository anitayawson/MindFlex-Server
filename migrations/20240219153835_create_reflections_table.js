/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reflections", (table) => {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
    table.text("content").notNullable();
    table.bigInteger("user_id").unsigned();
    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reflections");
};
