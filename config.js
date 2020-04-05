// Configuration Enviroments

const environments = {};

environments.development = {
  port: 3000,
  databaseName: 'mongodb://localhost/blog_app',
  envName: 'Development environments',
};
environments.production = {
  port: 8081,
  databaseName:
  //post your cluster link below ensure you remove <password> and input your own password ie tigerhead. I used my own cluster to debug it 
  '',
  envName: 'Production enviroment',
};


const currentEnvironments =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : '';
const environmentsToExport =
  typeof environments[currentEnvironments] === 'object'
    ? environments[currentEnvironments]
    : environments.production;

// Export Module
module.exports = environmentsToExport;