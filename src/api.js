import axios from "axios";

// const baseUrl = "http://localhost:3004/";

const baseUrl = "https://wallet-bc13-2022-default-rtdb.firebaseio.com/";

export const postTransaction = ({ transType, transaction }) => {
  return axios
    .post(baseUrl + "/transactions/" + transType + ".json", transaction)
    .then((res) => ({ ...transaction, id: res.data.name }))
    .catch((err) => {
      throw err;
    });
};

export const editTransactionApi = ({ transType, transaction }) => {
  return axios
    .patch(baseUrl + transType + "/" + transaction.id, transaction)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = () => {
  return axios
    .get(baseUrl+ "/transactions.json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({ id, transType }) => {
  return axios
    .delete(baseUrl + transType + "/" + id)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const postCategory = ({ transType, category }) => {
  return axios
    .post(baseUrl + transType + "Cat", category)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getCategories = (transType) => {
  return axios
    .get(baseUrl + transType + "Cat")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
