import * as yup from 'yup'


export const registerSchema = yup.object().shape({
  firstname: yup.string().required('required'),
  lastName:yup.string().required('required'),
  email:yup.string().email('Invalid email').required('required'),
  password:yup.string().required('required'),
  location:yup.string().required('required'),
  occupation:yup.string().required('required'),
  picture:yup.string().required('required'),
})

export const loginSchema = yup.object().shape({
  email:yup.string().email('Invalid email').required('required'),
  password:yup.string().required('required'),
})

export const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  location: '',
  occupation: '',
  picture: '',
}

export const initialValuesLogin = {
  email: '',
  password: '',
}