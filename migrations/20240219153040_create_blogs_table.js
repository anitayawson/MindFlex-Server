/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("blogs", (table) => {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.string("author").notNullable();
    table.text("author_image").notNullable();
    table.timestamp("date_posted").defaultTo(knex.fn.now()).notNullable();
    table.text("content").notNullable();
    table.text("thumbnail_image").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("blogs");
};
