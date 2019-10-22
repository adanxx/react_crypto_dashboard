import React from 'react';
import Styled ,{css} from 'styled-components';
import {SeletableTile} from '../Shared/Tile';
import {fontSize3,fontSize1, fontSizeBig} from '../Shared/Styles';
import {CoinHeaderGrid} from '../Settings/CoinHeaderGrid';

const PriceTileStyled = Styled(SeletableTile)`
  ${props => props.compact &&  css`
    display:grid;
    grid-gap:5px;
    grid-template-columns: repeat(3,1fr);
    justify-items: start
    font-size: 10px;
  `}
`;

const JustifyRight = Styled.div`
  justify-self: right;
`;

const JustifyLeft = Styled.div`
  justify-self: left;
`;

const TickerPrice = Styled.div`
 ${fontSizeBig};
`;

const ChangePct = Styled.div`
 color: green;
 ${props => props.red &&  css`
    color: red;
  `}
`;

const numberFormat = number =>{
    return +(number + '').slice(0,7);
}

function ChangePercentage ({data}){
    return(
      <JustifyRight>
        <ChangePct red={data.CHANGEPCT24HOUR < 0}>
          {numberFormat(data.CHANGEPCT24HOUR)} 
        </ChangePct>
     </JustifyRight>
    );
}

const  PriceTile =  ({sym, data, compact}) =>{
    return(
       <PriceTileStyled compact={compact}>
         <CoinHeaderGrid>
            <div>{sym}</div>
            <ChangePercentage data={data}/>
         </CoinHeaderGrid>
         <TickerPrice>
         $ {numberFormat(data.PRICE)}
        </TickerPrice>  
       </PriceTileStyled>
    );
}

function PriceTileCompact ({sym, data, compact}){
    return(
        <PriceTileStyled compact={compact}>
          <CoinHeaderGrid>
             <div>{sym}</div>
             <ChangePercentage data={data}/>
          </CoinHeaderGrid>
          <TickerPrice>
          $ {numberFormat(data.PRICE)}
         </TickerPrice>  
        </PriceTileStyled>
     );
}

export default function({price, index}){

    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];

    let TileClass = index < 5 ?  PriceTile : PriceTileCompact;

    return <TileClass sym={sym} data={data} compact={index >=5 }></TileClass>
}