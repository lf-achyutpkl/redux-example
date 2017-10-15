export const isEmpty = (value) => !value;

export const isEmailValid = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const isMinLengthValid = (value, lengthToValidate) => value.toString().length === lengthToValidate;
