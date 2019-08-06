const homeController = (req, resp) => {
  resp.send({message: 'Server on :)'});
};

module.exports = { homeController };
