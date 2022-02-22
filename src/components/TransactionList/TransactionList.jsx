import { useSelector } from "react-redux";
import TransactionListItem from "../TransactionListItem/TransactionListItem";

const TransactionList = ({ transType, switchEditForm }) => {
  const transactions = useSelector((state) => state.transactions);
  // const transactions = transactionsProps[transType];

  return (
    <ul>
      {transactions[transType].map((transaction) => (
        <TransactionListItem
          transaction={transaction}
          key={transaction.id}
          switchEditForm={switchEditForm}
        />
      ))}
    </ul>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     transactionsProps: state.transactions,
//   };
// };

export default TransactionList;

// const mapDispatchToProps = {}
