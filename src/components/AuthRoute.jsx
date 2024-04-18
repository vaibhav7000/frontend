import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes(props) {

  const auth  = props.auth;

  if (auth === undefined) return 'loading...';
  console.log(auth);

  return auth === true ? <Outlet></Outlet> : <Navigate to="/login" />;
}

export default PrivateRoutes;