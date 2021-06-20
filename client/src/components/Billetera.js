import React, { useEffect } from "react";

const Billetera = (props) => {
  const { compras } = props;

  const btcs = compras.filter((compra, key) => compra.moneda === "btc");
  const eths = compras.filter((compra, key) => compra.moneda === "eth");
  const ltcs = compras.filter((compra, key) => compra.moneda === "ltc");

  const totalb = btcs.reduce(
    (previousValue, currentValue) => previousValue + currentValue.monto,
    0
  );
  const totale = eths.reduce(
    (previousValue, currentValue) => previousValue + currentValue.monto,
    0
  );
  const totall = ltcs.reduce(
    (previousValue, currentValue) => previousValue + currentValue.monto,
    0
  );

  useEffect(() => {
    console.log(ltcs);
    console.log(totall);
  }, []);

  return (
    <>
      <h3>BILLETERA <img src='https://image.flaticon.com/icons/png/128/214/214362.png' height='30rem'/></h3>
        <div className="row">
          <div className="col-md-4">
            
            <div class="card">
              <div class="card-header">BITCOIN</div>
              <div class="card-body">
                <h5 class="card-title">{totalb}</h5>
                <p class="card-text">
                  CLP:
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-4">

          <div class="card">
              <div class="card-header">ETHEREUM</div>
              <div class="card-body">
                <h5 class="card-title">{totale}</h5>
                <p class="card-text">
                  CLP:
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-4">

          <div class="card">
              <div class="card-header">LITECOIN</div>
              <div class="card-body">
                <h5 class="card-title">{totall}</h5>
                <p class="card-text">
                  CLP:
                </p>
              </div>
            </div>


          </div>
        </div>
      
    </>
  );
};

export default Billetera;
