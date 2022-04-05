import Form from "../components/Form/Form";
import { registerFormOptions } from "../assets/options/registerFormOptions";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/authOperations";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const initialForm = {
  email: "",
  password: "",
  confirm: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const cbOnSubmit = ({ email, password }) =>
    dispatch(registerUser({ email, password }));

  return (
    <>
      <Form
        options={registerFormOptions}
        cbOnSubmit={cbOnSubmit}
        initialFormValue={initialForm}
      >
        <Link className="link" to={"/login"}>
          <Button
            variant="outline-dark"
            className="mx-auto d-block"
            as="input"
            type="submit"
            value="Login"
          />
        </Link>
      </Form>
    </>
  );
};

export default RegisterPage;
