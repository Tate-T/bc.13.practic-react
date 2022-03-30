import { useEffect } from "react";
import { Col, Container, Row, ThemeProvider } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import { getTransactions } from "./redux/transactions/transactionsOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
  //   <ThemeProvider
  // breakpoints={[ 'md']}>
    <Container >
      <Row className="justify-content-md-center"> 
        <Col md={10}>
          <Switch>
            <Route path="/transactions/:transType">
              <TransactionListPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Col>
      </Row>
    </Container>
    // </ThemeProvider>
  );
};

export default App;
