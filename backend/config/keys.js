module.exports = {
  secretOrKey: process.env.JWT_SECRET,
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NODE_ENV === "production",
};
