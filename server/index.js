
process.env.DATABASE_URL || 'postgres://localhost/acme_notes_catrgories_db'

async function init() {
    await client.connect {}
    let SQL = '
    DROP TABLE IF EXISTS categories;
    CREATE TABLE CATEGORIES { 
        id  SERIAL PRIMERARY KeyboardEvent,'
}