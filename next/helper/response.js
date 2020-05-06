const responseSuccess = (res, code = 200, message, data) =>
  res.status(code).json({
    status: {
      code,
      message,
      success: true,
    },
    payload: data,
  })

const responseError = (res, code = 400, message, error) =>
  res.status(code).json({
    status: {
      code,
      message,
      success: false,
    },
    payload: error,
  })

export { responseSuccess, responseError }
