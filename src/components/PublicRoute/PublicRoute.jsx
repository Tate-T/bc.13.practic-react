import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom"
import { getIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({ children, path, isRestricted }) => {
  const isAuth = useSelector(getIsAuth)
  return isAuth && isRestricted ? (
    <Redirect to="/" />
    ) : (
    <Route path={path}>{children}</Route>    
  )
}
 
export default PublicRoute;