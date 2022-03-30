import { FormStyled } from "./Form.styled";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, setInitialState } from "../../redux/form/formSlice";
import { getFormValue } from "../../redux/form/formSelectors";

const Form = ({ options, cbOnSubmit, initialFormValue, cbOnClick = null }) => {
  const dispatch = useDispatch();

  const form = useSelector(getFormValue);

  // const [form, setForm] = useState(initialFormValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit(form);
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setForm((prev) => ({ ...prev, [name]: value }));
    dispatch(changeInput({ name, value }));
  };

  useEffect(() => {
    dispatch(setInitialState(initialFormValue));
  }, []);

  return (
    <FormStyled onSubmit={handleSubmit}>
      {options.map(({ title, name, type, placeholder }) => (
        <InputGroup key={name} className="mb-3">
          {title && <InputGroup.Text>{title}</InputGroup.Text>}
          <FormControl
            name={name}
            type={type}
            value={form[name]}
            placeholder={placeholder}
            onChange={type !== "button" ? handleChange : null}
            onClick={type === "button" ? cbOnClick : null}
          />
        </InputGroup>
      ))}

      <Button
        variant="outline-dark"
        className="mx-auto d-block"
        as="input"
        type="submit"
        value="Submit"
      />
    </FormStyled>
  );
};

export default Form;
