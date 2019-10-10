import React from 'react';
import Styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import _ from 'lodash';
import {backgroundColor2, fontSize3} from '../Shared/Styles';
import fuzzy from 'fuzzy';


const SearchGrid = Styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = Styled.input`
  ${backgroundColor2}
  ${fontSize3}
  border: 1px solid;
  height: 28px;
  min-width: 35%;
  color: #fff;
  font-weight: 600;
  place-self: center left;
  padding: 0 10px;

   &:hover{
       border: 2px solid #0072BF;
   }
`;

const handleFilter = _.debounce((inputValue, coinList, setFilterCoins)=>{
    let coinsSymbols = Object.keys(coinList);
    let coinNames = coinsSymbols.map( sym => coinList[sym].CoinName);
    let allStringToSearch = coinsSymbols.concat(coinNames)

    let fuzzyResult = fuzzy.filter(inputValue, allStringToSearch).map(coin =>{
        return coin.string;
    })

    let filterCoins = _.pickBy(coinList, (result, symKey) =>{
        let coinName  = result.coinName;
        return (_.includes(fuzzyResult, symKey) || _.includes(fuzzyResult, coinName))   
    })

    console.log(filterCoins)

    setFilterCoins(filterCoins)
   
}, 500)

function filterCoins(e, setFilterCoins, coinList){
  let input = e.target.value;

  handleFilter(input, coinList, setFilterCoins);
}

export default function (){
    return(
      <AppContext.Consumer>
          {({setFilterCoins, coinList}) =>
          <SearchGrid> 
           <h2>Search All Coins</h2>
           <SearchInput placeholder="Enter Coin Name..." onKeyUp={(e)=> filterCoins(e , setFilterCoins, coinList)}/>
          </SearchGrid>
          }
      </AppContext.Consumer>
       
    )
}