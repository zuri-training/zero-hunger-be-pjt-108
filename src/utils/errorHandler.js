class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    if (process.env.NODE_ENV === production){
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ErrorHandler;
