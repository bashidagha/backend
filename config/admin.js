module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6562a83a537559a4dddd2836cb309a7c'),
  },
});
