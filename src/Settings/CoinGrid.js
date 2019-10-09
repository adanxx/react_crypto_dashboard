import React from 'react';
import Styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
// import {SeletableTile} from '../Shared/Tile';
import CoinTile from './coinTile';

export const CoinGridStyled = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

 function getCoinsToDisplay(coinList, topSection){
     return Object.keys(coinList).slice(0, topSection ? 10 : 100);
 }

export default function({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList})=>  <CoinGridStyled>
               {getCoinsToDisplay(coinList, topSection).map((coinKey, index)=>{
                  return <CoinTile key={index} coinKey={coinKey} topSection={topSection}/>
               })}
            </CoinGridStyled>
            }    
        </AppContext.Consumer>
    )
}