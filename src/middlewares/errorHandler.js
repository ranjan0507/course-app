export const errorHandler = (err, req, res, next) => {
  console.error(err);  

  if (err.errors) {
    return res.status(400).json({
      message: 'Validation error',
      issues: err.errors
    });
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
};
