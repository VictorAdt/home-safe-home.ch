module.exports = ({ env }) => ({
  host: env('PROD', '10.102.5.192'),
  port: env.int('NODE_PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '92be7c266b9c850bd738aebbddcf940f'),
    },
  },
});
