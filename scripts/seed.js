const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS todolists (
        id serial PRIMARY KEY,
        taskName VARCHAR(255) NOT NULL,
        taskDate DATE NOT NULL,
        taskTime TIME NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers =  client.sql`
        INSERT INTO todolists (taskName, taskDate, taskTime)
        VALUES ('BreakFast','2024-04-28','12:00:00');`;

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      todolists: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
