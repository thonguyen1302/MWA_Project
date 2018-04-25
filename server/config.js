var config = {};

config.dbUrl = process.env.NODE_ENV == 'production' ? 'mongodb://admin:123456@ds157599.mlab.com:57599/company_resource' : 'mongodb://127.0.0.1:27017/companyResource';

module.exports = config;