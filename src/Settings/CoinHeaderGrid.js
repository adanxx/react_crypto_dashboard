import React from 'react';
import Styled from 'styled-components';
import {DeleteableTile} from '../Shared/Tile'

export const CoinHeaderGrid = Styled.div`
display: grid;
    grid-template-columns: 1fr 1fr
`;

export const CoinSymbol = Styled.div`
  justify-self: right;
  padding: 10px;
`;

export const DeleteToken = Styled.div`
  justify-self: center;
  display: none;
  ${DeleteableTile}:hover & {
     display:block;
     color: red;
     margin-left:auto
   }
`;


export default function({name, symbol, topSection}){
    return(<CoinHeaderGrid>
            <div>{name}</div>
            {
                topSection ?( <DeleteToken> X </DeleteToken>):<CoinSymbol>{symbol}</CoinSymbol>  
            }
       </CoinHeaderGrid>
    )
}