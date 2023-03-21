import { Auth } from "aws-amplify";
import { useLayoutEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthWrapper = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const authCheck = async () => {
      setIsLoading(true);

      if (!isAuthenticated) {
        setIsAuthenticated(false);
      }

      try {
        const session = await Auth.currentSession();

        if (session) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    authCheck();

    return () => {};
  }, [location.pathname]);
  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && location.pathname === "/login") {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthWrapper;
