import { useContext, useEffect } from "react";
import { AuthContext } from "./../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuth) navigate("/");
    },
    [isAuth, navigate]
  );
  return isAuth && children;
}

export default ProtectedRoute;
