export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: 'usee name...',
    },
    notEmpty: {
      errorMessage: 'usernmae cannot be empty',
    },
    isString: {
      errorMessage: 'username must be string',
    },
  },
  displayName: {
    notEmpty: {
      errorMessage: 'usernmae cannot be empty',
    },
  },
};

export const checkQuerySchema = {
  filiter: {
    isString: {
      errorMessage: 'must be string',
    },
    notEmpty: {
      errorMessage: 'must not be empty',
    },
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: 'must be at least 3 - 10 charcter',
    },
    optional: true,
  },
};
