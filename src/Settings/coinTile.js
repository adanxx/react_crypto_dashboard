import React from "react";
import { AppContext } from "../App/AppProvider";
import { SeletableTile, DeleteableTile, DisableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from "../Shared/CoinImage";

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        let TileClass = SeletableTile;

        if (topSection) {
          TileClass = DeleteableTile;
        }

        return (
          <TileClass>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
