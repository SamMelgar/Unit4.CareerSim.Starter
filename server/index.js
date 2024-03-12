require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL || "postgres://localhost/e_commerce"
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  }
}

async function createTables() {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10, 2) NOT NULL
      )
    `);
    console.log("Products table created successfully");
  } catch (error) {
    console.error("Error creating products table:", error);
  }
}

(async () => {
  await connectToDatabase();
  await createTables();
})();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});