module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('NODE_PORT', 8000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a7fd829d72533085426a8202713b9882'),
    },
  },
});
