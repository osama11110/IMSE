// Use your MySQL configuration settings
const MYSQL_DATABASE_CONFIGURATION = {
    HOST: 'localhost', 
    USER: 'root',
    PASSWORD: '1234',
  };
  
  // Use your MongoDB settings
  const MONGODB_DATABASE_CONFIGURATION = {
    URI: 'mongodb://localhost:27017/test'
  }
  
  module.exports = { MYSQL_DATABASE_CONFIGURATION, MONGODB_DATABASE_CONFIGURATION };
  