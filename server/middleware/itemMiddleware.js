exports.validateItem = (req, res, next) => {
  if (
    !req.body.imgUrl ||
    !req.body.price ||
    !req.body.description ||
    !req.body.like
  ) {
    return res.status(400).json({
      status: 'fail',
      message: 'オブジェクトの形式が間違っています',
    });
  }
  next();
};
