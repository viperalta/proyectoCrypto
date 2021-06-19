import React, { useEffect, useState } from "react";
import * as chartjs from "chart.js";
import { Line } from "react-chartjs-2";
import moment from 'moment'

const Grafico = (props) => {
  const [btcPrice, setBtcPrice] = useState([]);
  const [ethPrice, setEthPrice] = useState([]);
  const [ltcPrice, setLtcPrice] = useState([]);
  const labels = ["fecha1", "fecha2", "fecha3", "fecha4"];
  const data = [1, 2, 30];
  const data2 = [13, 23, 3];
  const data3 = [15, 5, 35];
  const [result, setResult] = useState([]);
  const [resultBtcPrice, setResultBtcPrice] = useState([]);
  const [resultEthPrice, setResultEthPrice] = useState([]);
  const [resultLtcPrice, setResultLtcPrice] = useState([]);
  const [resultBtcTime, setResultBtcTime] = useState([]);
  const [timeStamp, setTimeStamp] = useState([]);
  // BTC
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=CLP&limit=30&api_key=1538e6cd3a57308e6e3a8f75d008b49553958f7ce261905e23de93b647f83cb4"
    )
      .then((response) => response.json())
      .then((data) => setBtcPrice(data.Data.Data));
  }, []);
  // ETH
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=CLP&limit=30&api_key=1538e6cd3a57308e6e3a8f75d008b49553958f7ce261905e23de93b647f83cb4"
    )
      .then((response) => response.json())
      .then((data) => setEthPrice(data.Data.Data));
  }, []);
  // LTC
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=CLP&limit=30&api_key=1538e6cd3a57308e6e3a8f75d008b49553958f7ce261905e23de93b647f83cb4"
    )
      .then((response) => response.json())
      .then((data) => setLtcPrice(data.Data.Data));
  }, []);

  useEffect(() => {
    // const dateString = moment.unix(value).format("MM/DD/YYYY")
    
    const arrTimeRaw = btcPrice.map((index) => 
    moment.unix(index.time).format("MM/DD/YYYY"));
    setResultBtcTime(arrTimeRaw);

    const arrBtc = btcPrice.map((index) => index.open);
    setResultBtcPrice(arrBtc);

    const arrEth = ethPrice.map((index) => index.open);
    setResultEthPrice(arrEth);

    const arrLtc = ltcPrice.map((index) => index.open);
    setResultLtcPrice(arrLtc);
  }, [btcPrice]);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          {" "}
          <Line
            data={{
              labels: resultBtcTime,
              datasets: [
                {
                  label: "BTC",
                  data: resultBtcPrice,
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
            height={400}
            width={600}
          />
        </div>
        <div class="col-md-4">
          <Line
            data={{
              labels: resultBtcTime,
              datasets: [
                {
                  label: "ETH",
                  data: resultEthPrice,
                  fill: false,
                  borderColor: "rgb(165, 105, 189)",
                  tension: 0.1,
                },
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
        <div class="col-md-4">
          <Line
            data={{
              labels: resultBtcTime,
              datasets: [
                {
                  label: "LTC",
                  data: resultLtcPrice,
                  fill: false,
                  borderColor: "rgb(230, 126, 34)",
                  tension: 0.1,
                },
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
      </div>
    </div>
  );
};

export default Grafico;
