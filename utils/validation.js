// validationSchema.js
"use client"

import * as yup from 'yup';

// Yup yordamida validatsiya sxemasi
const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default loginValidationSchema;
