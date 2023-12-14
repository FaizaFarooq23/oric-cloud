import prisma from '@/lib/prisma';
const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  try {
    // Read the SQL file
    
    const sqlFilePath = 'C:/Users/Bilal Traders/Desktop/Oric Cloud/oric/sql/createTriggers.sql'
    const sql = fs.readFileSync(sqlFilePath, 'utf-8');

    // Execute the raw SQL query to create the trigger
    await prisma.$executeRaw`CREATE TRIGGER faculty_after_insert AFTER INSERT ON Faculty FOR EACH ROW BEGIN INSERT INTO Account (username, password) VALUES (NEW.email, NEW.password); END;`;

    return res.status(200).json({ message: 'Trigger created successfully' });
  } catch (error) {
    console.error('Error creating trigger:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
