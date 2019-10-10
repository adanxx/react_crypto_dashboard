import React from 'react';
import Styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
// import {SeletableTile} from '../Shared/Tile';
import CoinTile from './coinTile';

export const CoinGridStyled = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;


  function getLowerSectionCoins(coinList, filterCoins){

    return (filterCoins && Object.keys(filterCoins)) || Object.keys(coinList).slice(0, 120);
  }

 function getCoinsToDisplay(coinList, topSection, favorites, filterCoins){
     return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
 }

export default function({topSection}){
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filterCoins})=>  <CoinGridStyled>
               {getCoinsToDisplay(coinList, topSection, favorites, filterCoins).map((coinKey, index)=>{
                  return <CoinTile key={index} coinKey={coinKey} topSection={topSection}/>
               })}
            </CoinGridStyled>
            }    
        </AppContext.Consumer>
    )
}