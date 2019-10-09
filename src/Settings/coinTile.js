import React from 'react';
import {AppContext} from '../App/AppProvider'
import {SeletableTile} from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage'

export default function({coinKey}){
  
  return (
      <AppContext.Consumer>
       {({coinList})=>{
           let coin =  coinList[coinKey]; 
           const TileClass = SeletableTile;

           return <TileClass>
              <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol}/>
              <CoinImage coin={coin}/>
           </TileClass> 

       }}
    </AppContext.Consumer>
  )
}
