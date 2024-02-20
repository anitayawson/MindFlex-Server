/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("specialties").del();
  await knex("specialties").insert([
    {
      id: 1,
      name: "Remote",
    },
    {
      id: 2,
      name: "Anxiety/Stress",
    },
    {
      id: 3,
      name: "Couples/Relationships",
    },
    {
      id: 4,
      name: "Faith-Based",
    },
    {
      id: 5,
      name: "Depression/Mood Disorders",
    },
    {
      id: 6,
      name: "Trauma & PTSD",
    },
    {
      id: 7,
      name: "LGBTQ+",
    },
  ]);
};
