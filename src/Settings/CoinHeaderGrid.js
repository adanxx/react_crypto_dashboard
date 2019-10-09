import React from 'react';
import Styled from 'styled-components';

export const CoinHeaderGrid = Styled.div`
display: grid;
    grid-template-columns: 1fr 1fr
`;

export const CoinSymbol = Styled.div`
  justify-self: right;
  padding: 10px;
`;

export default function({name, symbol}){
    return(<CoinHeaderGrid>
            <div>{name}</div>
            <CoinSymbol>{symbol}</CoinSymbol>  
       </CoinHeaderGrid>
    )
}