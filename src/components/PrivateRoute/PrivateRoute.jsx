import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom"
import { getIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ children, path }) => {
  const isAuth = useSelector(getIsAuth)

  return isAuth ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  )
}
 
export default PrivateRoute;