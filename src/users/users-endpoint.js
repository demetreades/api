const makeUsersEndpoint = (entity) => {
  return async (httpRequest) => {
    switch (httpRequest.method) {
      case 'POST':
        return await '';
      case 'GET':
        return await '';

      default:
        return 'new ApiError({ statusCode: 405, message: method not allowed })';
    }
  };
};
