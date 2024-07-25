module.exports = (err, req, res, next) => {
  const statusCode = res.errorStatusCode || res.statusCode || 500;


  
  console.log(res.statusCode);
  console.log(res.status);
  console.log("res.errorStatusCode", res.errorStatusCode);

  
  res.status(statusCode).json({
    error: true,
    message: err.message,
  });
};
