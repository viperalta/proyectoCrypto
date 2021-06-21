import React, { useState, useEffect } from "react";
import CompraForm from "../components/CompraForm";
import Billetera from "../components/Billetera";
import { useUser } from "../contexts/userContext";
import axios from "axios";
import Swal from "sweetalert2";
import Grafico from "../components/Grafico";

const Main = () => {
  const { user, setUser } = useUser();
  const [errors, setErrors] = useState([]);
  const [compras, setCompras] = useState([]);
  const [refresh,setRefresh]=useState(1);

  useEffect(() => {
    if (user) {
      axios
        .get("/api/compras-by-user/" + user._id, { withCredentials: true })
        .then((res) => setCompras(res.data));
    }
  }, [refresh]);

  const createCompra = (values) => {
    const compra = {
      moneda: values.moneda,
      monto: values.monto,
      idUser: user._id,
    };
    console.log(compra);

    axios
      .post("/api/compra/add", compra, { withCredentials: true })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Compraste " + compra.moneda + "(" + compra.monto + ")",
          showConfirmButton: false,
          timer: 3000,
        });
        axios
          .get(`/api/user/${res.data._id}`, { withCredentials: true })
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.error(err);
            return { success: false, data: err.message };
          });
          setRefresh((prev)=>prev+1);
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };


  const showMain = () => {
    if (user) {
      return (
        <>
          <h2>DASHBOARD</h2>
          <hr className="title-separator"></hr>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"><CompraForm onSubmitProp={createCompra} /></div>
              <div className="col-md-8"><Billetera compras={compras} /></div>
            </div>
          </div>

          
        </>
      );
    } else {
      return (
        <>
          <h2>Bienvenid@ al proyecto crypto</h2>
        </>
      );
    }
  };

  return (
    <div>
      {errors.map((err, index) => (
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      ))}
      {showMain()}
      <br></br>
      <Grafico />
    </div>
  );
};

export default Main;
