const NODE_ENV = process.env.NODE_ENV || 'dev';

const ENVS = {
  dev: {
    SECRET_KEY: 'dkcvhefovoer',
    db: {
      url: process.env.URL_MONGO
    },
    port: process.env.PORT
  },
  test: {

  },
  production: {

  }
};

// eslint-disable-next-line security/detect-object-injection
module.exports = ENVS[NODE_ENV];
