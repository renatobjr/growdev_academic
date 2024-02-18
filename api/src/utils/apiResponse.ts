const apiResponse = (httpStatus: number, message: string, data?: any) => {
  return {
    httpStatus,
    message,
    data,
  };
};

export default apiResponse;
