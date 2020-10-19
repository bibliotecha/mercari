exports.checkID = (req, res, next, val) => {
  if (val > items.length || val < 0) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }
  next();
};
