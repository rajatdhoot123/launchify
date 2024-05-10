module.exports = {
  apps: [
    {
      name: "launchify",
      script: "npm", // npm start
      args: "run start", // Check package json above
      listen_timeout: 12000, // Hack Without timeout we will get downtime in deployment
      cwd: "/home/ubuntu/launchify", // Command execution path
      instances: "max", // Max Use all the CPU
      exec_mode: "cluster", // Clustor Mode
      env_production: {
        PORT: 3000, // Default Port
        NODE_ENV: "production", // Production Env
      },
      // You can configure for multiple environments
    },
  ],
};
