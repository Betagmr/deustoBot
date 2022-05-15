require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'http://server-container:3001'
  : 'http://localhost:3001';

module.exports = {
  TOKEN,
  PREFIX,
  BASE_URL,
};