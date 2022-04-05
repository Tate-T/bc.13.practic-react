import  Form  from "../components/Form/Form"
import { registerFormOptions } from "../assets/options/registerFormOptions"
import { useDispatch } from "react-redux"
import { registerUser } from "../redux/auth/authOperations"

const initialForm = {
  email: "",
  password: "",
  confirm: "",
}

const RegisterPage = () => {
  const dispatch = useDispatch()
const cbOnSubmit = ({ email, password }) =>
  dispatch(registerUser({ email, password })) ;

  return (
    <Form
      options={registerFormOptions}
      cbOnSubmit={cbOnSubmit}
      initialFormValue={initialForm}
    />
  )
}

export default RegisterPage
