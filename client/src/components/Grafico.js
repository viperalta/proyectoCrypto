import React, {useEffect, useState} from 'react';
import * as chartjs from 'chart.js';
import { Line } from 'react-chartjs-2';

const Grafico = (props) => {
    const [btcPrice, setBtcPrice] = useState();
    
useEffect(()=>{
     fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=10&api_key=1538e6cd3a57308e6e3a8f75d008b49553958f7ce261905e23de93b647f83cb4')
    .then(response => response.json())
    .then(data => setBtcPrice(data.Data.Data));  
    console.log(btcPrice)
},[setBtcPrice])

   
    
    return (
        <div>
        
            <Line 
             data={{
                labels: props.labels,
                datasets: [{
                  label: 'Índice de Masa Corporal (IMC)',
                  data: props.data,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }]
            }}
            height={400}
            width={600}
            
            
            />
            
        </div>
    );
}


export default Grafico;