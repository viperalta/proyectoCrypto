import React from "react";
import logout from "../actions/logout";
import { useUser } from "../contexts/userContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const Header = () => {
  const { user, setUser } = useUser();
  const history = useHistory();

  const logOut = async () => {
    const { success } = await logout();
    if (success) setUser(null);
    else window.alert("Error, could not log out");
    history.push("/");
  };

  const renderHeader = () => {
    if (user) {
      return (
        <>
         <header>
             <h3>Proyecto Crypto</h3>
             <div className="menu">
                 <Link to="/">Dashboard</Link>
                 <Link to="/historial">Historial de Compras</Link>
             </div>
             <div className="menubuttons">
             ¡Hola {user.firstName}!{" "}
                <button onClick={logOut} className="btn-secondary">
                  Cerrar Sesion
                </button>
             </div>
         </header>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-text">
                <Link to="/" className="nodecoration">
                  <h3>Proyecto Crypto</h3>
                </Link>
              </span>
              <span className="navbar-text">
                <Link to="/register">
                  <button className="btn-secondary m-1">Registrarse</button>
                </Link>
                <Link to="/login">
                  <button className="btn-primary">Iniciar Sesión</button>
                </Link>
              </span>
            </div>
          </nav>
        </>
      );
    }
  };

  return <div>{renderHeader()}</div>;
};

export default Header;
