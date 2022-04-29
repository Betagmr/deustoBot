require('dotenv').config();

const PORT = process.env.PORT;

const MONGODB_URI = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI;

const ROUTES = {
  remainder_url: '/api/reminder',
  coin_url: '/api/coin',
  gambling_url: '/api/gambling',
  checklist_url: '/api/checklist'
};

module.exports = {
  MONGODB_URI,
  PORT,
  ROUTES,
};
