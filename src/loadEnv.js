function load() {
  const { loadEnvFile } = require('node:process');

  loadEnvFile('../.env');

  console.log(process.env.RESEND_API_KEY);
}
