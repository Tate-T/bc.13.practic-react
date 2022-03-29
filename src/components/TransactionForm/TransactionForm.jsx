import { useState } from "react";
import { editTransactionApi } from "../../api";
import CategoryList from "../CategoryList/CategoryList";
import { useTransactionsContext } from "../../context/TransactionsProvider";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addCosts,
  addIncomes,
  editTransaction,
} from "../../redux/transactions/transactionsOperations";
import { Col, Form, FormControl, InputGroup, Button } from "react-bootstrap";
import SelectTranstype from "../SelectTranstype/SelectTranstype";
import { FormStyled } from "./TransactionForm.styled";

const initialForm = {
  date: "2022-02-22",
  time: "",
  category: "eat",
  currency: "UAH",
  comment: "",
  total: "",
};

const TransactionForm = ({
  togleCategoryList,
  editingTransaction,
  setIsEdit,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  const [form, setForm] = useState(() =>
    editingTransaction ? editingTransaction : initialForm
  );
  const [transType, setTransType] = useState("costs");

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openCategoryList = () => {
    history.push(
      match.url === "/" ? "/categories-list" : match.url + "/categories-list"
    );
  };

  const handleChangeTransType = (e) => {
    const { value } = e.target;
    setTransType(value);
  };

  const handleSubmitTrans = (e) => {
    e.preventDefault();
    if (editingTransaction) {
      dispatch(editTransaction({ transType, transaction: form }));
      setIsEdit(false);
    } else {
      transType === "costs" && dispatch(addCosts(form));
      transType === "incomes" && dispatch(addIncomes(form));
    }
    setForm(initialForm);
  };

  const setCategory = (newCategory) => {
    setForm((prevForm) => ({ ...prevForm, category: newCategory }));
    history.goBack();
  };

  const { date, time, category, total, currency, comment } = form;

  return (
    <Switch>
      <Route path={match.path} exact>
        <SelectTranstype
          handleChangeTransType={handleChangeTransType}
          transType={transType}
        />

        <FormStyled onSubmit={handleSubmitTrans}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Day</InputGroup.Text>
            <FormControl
              name="date"
              type="date"
              value={date}
              onChange={handleChangeForm}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Time</InputGroup.Text>
            <FormControl
              name="time"
              type="time"
              value={time}
              onChange={handleChangeForm}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Category</InputGroup.Text>
            <FormControl
              name="category"
              type="button"
              value={category}
              onClick={openCategoryList}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Total</InputGroup.Text>
            <FormControl
              name="total"
              type="text"
              placeholder="Enter sum"
              value={total}
              onChange={handleChangeForm}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Currency</InputGroup.Text>
            <FormControl
              name="currency"
              type="button"
              value={currency}
              onClick={null}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              name="comment"
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={handleChangeForm}
            />
          </InputGroup>
          <Button variant="outline-dark" className="mx-auto d-block" as="input" type="submit" value="Submit" />
        </FormStyled>
      </Route>

      <Route
        path={
          match.path === "/"
            ? "/categories-list"
            : match.path + "/categories-list"
        }
      >
        <CategoryList
          transType={transType}
          togleCategoryList={togleCategoryList}
          setCategory={setCategory}
        />
      </Route>
    </Switch>
  );
};
// const mapDispatchToProps = {
//   addIncomesProps: addIncomes,
//   addCostsProps: addCosts,
// };

export default TransactionForm;
