import axios from "axios";

// const baseUrl = "http://localhost:3004/";


// зробити свій бекенд (зареєструвати) !!!!
const baseUrl =
  "https://wallet-bc-13-default-rtdb.europe-west1.firebasedatabase.app"
const API_KEY = "AIzaSyCQgYKU4dc1QAs8zEUp_bKCyg-BpQ2eN14"

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
    .put(
      baseUrl + "/transactions/" + transType + "/" + transaction.id + ".json",
      transaction
    )
    .then((res) => ({ ...res.data, id: transaction.id }))
    .catch((err) => {
      throw err;
    });
};

export const getTransactionsApi = () => {
  return axios
    .get(baseUrl + "/transactions.json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const removeTransactionApi = ({ id, transType }) => {
  return axios
    .delete(baseUrl + "/transactions/" + transType + "/" + id + ".json")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const postCategory = ({ transType, category }) => {
  return axios
    .post(baseUrl + "/" + transType + "Cat", category)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getCategories = (transType) => {
  return axios
    .get(baseUrl + "/" + transType + "Cat")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};


export const registerUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
  axios.defaults.params = { key: API_KEY }
  return axios
    .post("/accounts:signUp", {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      localId: data.localId,
      email: data.email,
      refreshToken: data.refreshToken,
    }))
}

export const loginUserApi = (userData) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
  axios.defaults.params = { key: API_KEY }
  return axios
    .post("/accounts:signInWithPassword", {
      ...userData,
      returnSecureToken: true,
    })
    .then(({ data }) => ({
      idToken: data.idToken,
      localId: data.localId,
      email: data.email,
      refreshToken: data.refreshToken,
    }))
}

export const getCurUserApi = (idToken) => {
  axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
  axios.defaults.params = { key: API_KEY }
  return axios
    .post("/accounts:lookup", {
      idToken,
    })
    .then(({ data }) => {
      const { localId, email } = data.users[0]
      return { localId, email }
    })
}

export const refreshTokenApi = (refreshToken) => {
  axios.defaults.baseURL = "https://securetoken.googleapis.com/v1"
  axios.defaults.params = { key: API_KEY }
  return axios
    .post("/token", {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    .then(({ data }) => ({
      idToken: data.id_token,
      refreshToken: data.refresh_token,
    }))
}