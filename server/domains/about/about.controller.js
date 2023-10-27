// Actions methods

// GET "/about"
const about = (req, res) => {
  res.render('home/aboutView', { appVersion: '1.0.0' });
};

export default {
  about,
};
