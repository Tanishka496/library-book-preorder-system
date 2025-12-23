const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const USERS_FILE = path.join(__dirname, 'users.json');

function usage() {
  console.log('Usage: node add_user.js <studentId> <password>');
  process.exit(1);
}

const [,, studentId, password] = process.argv;
if (!studentId || !password) usage();

if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]', 'utf8');

const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')) || [];
if (users.find(u => u.studentId === studentId)) {
  console.error('User already exists');
  process.exit(2);
}

const hashed = bcrypt.hashSync(password, 10);
const user = { id: Date.now(), studentId, password: hashed };
users.push(user);
fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
console.log('User added:', studentId);
