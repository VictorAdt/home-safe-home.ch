module.exports = ({ env }) => ({
  host: env('PROD', '10.102.5.192'),
  port: env.int('NODE_PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a7fd829d72533085426a8202713b9882'),
    },
  },
});


