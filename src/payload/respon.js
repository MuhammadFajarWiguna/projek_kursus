const responGagal = (res, code, status, message, data) => {
  res.status(code).json({status, message, data});
};

const responSukses = (res, code, status, message, data) => {
  res.status(code).json({status, message, data});
};

export { responGagal, responSukses };
