import React from "react";
import { AppContext } from "../App/AppProvider";
import { SeletableTile, DeleteableTile, DisableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";


function onClickCoinHandler(topSection, coinKey, addCoin, removeCoin){
 return topSection ?
    () =>  removeCoin(coinKey)  : () =>  addCoin(coinKey)
}


export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinList[coinKey];
        let TileClass = SeletableTile;

        if (topSection) {
          TileClass = DeleteableTile;
        }else if (isInFavorites(coinKey)){
          TileClass = DisableTile;
        }

        return (
          <TileClass onClick={onClickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
