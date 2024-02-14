/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("therapists", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("role").notNullable();
    table.string("location").notNullable();
    table.float("rating").notNullable();
    table.bigInteger("experience_years").notNullable();
    table.float("price").notNullable();
    table.text("image").notNullable();
    table.text("bio").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("therapists");
};
