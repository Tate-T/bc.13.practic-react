import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import MainBtns from "../MainBtns/MainBtns";
import TransactionForm from "../TransactionForm/TransactionForm";

const MainPage = () => {
  const { isExact } = useRouteMatch();

  return (
    <>
      <TransactionForm />
      {isExact && <MainBtns />}
    </>
  );
};

export default MainPage;
