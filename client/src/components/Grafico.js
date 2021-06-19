import React, { useEffect, useState } from "react";
import * as chartjs from "chart.js";
import { Line } from "react-chartjs-2";

const Grafico = (props) => {
  const [btcPrice, setBtcPrice] = useState([]);
  const labels = ["fecha1", "fecha2", "fecha3", "fecha4"];
  const data = [1, 2, 30];
  const data2 = [13, 23, 3];
  const data3 = [15, 5, 35];
  const [result, setResult] = useState([]);
  const [resultBtcPrice, setResultBtcPrice] = useState([]);

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=CLP&limit=3&api_key=1538e6cd3a57308e6e3a8f75d008b49553958f7ce261905e23de93b647f83cb4"
    
    )
      .then((response) => response.json())
      .then((data) => setBtcPrice(data.Data.Data));
  }, []);

  useEffect(() => {
    const arr = btcPrice.map((index) => (
       index.open
    ));
    setResultBtcPrice(arr)
    console.log(arr);
  }, [btcPrice]);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  label: "BTC",
                  data: resultBtcPrice,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
                //   {
                //     label: "otro po",
                //     data: data2,
                //     fill: false,
                //     borderColor: "rgb(75, 192, 192)",
                //     tension: 0.1,
                //   },
                //   {
                //     label: "data n3",
                //     data: data3,
                //     fill: false,
                //     borderColor: "rgb(75, 192, 192)",
                //     tension: 0.1,
                //   },
              ],
            }}
            height={400}
            width={600}
          />
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  );
};

export default Grafico;
