import { useRouteMatch } from "react-router-dom";
import MainBtns from "../MainBtns/MainBtns";
import TransactionForm from "../TransactionForm/TransactionForm";

const MainPage = () => {
  const { isExact } = useRouteMatch();
  // state = {
  //   isOpenCategories: false,
  // };

  // togleCategoryList = () => {
  //   this.setState((prevState) => ({
  //     isOpenCategories: !prevState.isOpenCategories,
  //   }));
  // };

  return (
    <>
      <TransactionForm />
      {isExact &&
        <MainBtns />}
    </>
  );
};

export default MainPage;
