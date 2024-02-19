/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("therapists_specialties", (table) => {
    table.bigInteger("therapist_id").unsigned().notNullable();
    table
      .foreign("therapist_id")
      .references("therapists.id")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.bigInteger("specialty_id").unsigned().notNullable();
    table
      .foreign("specialty_id")
      .references("specialties.id")
      .onDelete("SET NULL")
      .onUpdate("CASCADE");
    table.primary(["therapist_id", "specialty_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("therapists_specialties");
};
