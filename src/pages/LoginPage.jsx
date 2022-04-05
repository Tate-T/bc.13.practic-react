import Form from "../components/Form/Form";
import { loginFormOptions } from "../assets/options/loginFormOptions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const initialForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  console.log("LoginPage");

  return (
    <>
      <Form
        options={loginFormOptions}
        cbOnSubmit={null}
        initialFormValue={initialForm}
      >
        <Link className="link" to={"/register"}>
          <Button
            variant="outline-dark"
            className="mx-auto d-block"
            as="input"
            type="submit"
            value="Register"
          />
        </Link>
      </Form>
    </>
  );
};

export default LoginPage;
