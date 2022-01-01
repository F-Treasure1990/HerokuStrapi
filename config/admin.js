module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd0c77b870b0c12fbd72a83531e8149fe'),
  },
});
