import { useEffect, useMemo, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCosts,
  addIncomes,
  editTransaction,
} from "../../redux/transactions/transactionsOperations";

import SelectTranstype from "../SelectTranstype/SelectTranstype";
import { FormStyled } from "../Form/Form.styled";
import { transactionFormOptions } from "../../assets/options/transactionFormOptions";
import Form from "../Form/Form";
import { getTransactions } from "../../redux/transactions/transactionSelectors";
import { changeInput, setInitialState } from "../../redux/form/formSlice";

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

  const transactions = useSelector(getTransactions);
  const [transType, setTransType] = useState("costs");
  const curTransactions = transactions[transType];

  const openCategoryList = () => {
    history.push(
      match.url === "/" ? "/categories-list" : match.url + "/categories-list"
    );
  };

  const handleChangeTransType = (e) => {
    const { value } = e.target;
    setTransType(value);
  };

  const handleSubmitTrans = (form) => {
    if (editingTransaction) {
      dispatch(editTransaction({ transType, transaction: form }));
      setIsEdit(false);
    } else {
      transType === "costs" && dispatch(addCosts(form));
      transType === "incomes" && dispatch(addIncomes(form));
    }
    // setForm(initialForm);
  };

  const setCategory = (newCategory) => {
    dispatch(changeInput({ name:"category", value:newCategory }));
    // setForm((prevForm) => ({ ...prevForm, category: newCategory }));
    history.goBack();
  };

  const initialFormValue = useMemo(
    () => (editingTransaction ? editingTransaction : initialForm),
    [editingTransaction]
  );

  useEffect(() => {
    dispatch(setInitialState(initialFormValue));
  }, [dispatch, initialFormValue, curTransactions]);

  return (
    <Switch>
      <Route path={match.path} exact>
        <SelectTranstype
          handleChangeTransType={handleChangeTransType}
          transType={transType}
        />

        <Form
          options={transactionFormOptions}
          cbOnSubmit={handleSubmitTrans}
          initialFormValue={initialFormValue}
          cbOnClick={openCategoryList}
        />
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
