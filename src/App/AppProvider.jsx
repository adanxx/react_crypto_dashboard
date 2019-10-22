import React from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            page: 'Dashboard',
            favorites: ['BTC', "ETH", "XMR", "DOGE","DASH"],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin : this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilterCoins: this.setFilterCoins
        }
    }

    componentDidMount(){
        this.fetchCoint();
        this.fetchPrices();
    }

    confirmFavorites = () =>{
       this.setState({
           page: 'Dashboard', 
           firstVisit: false}
           , ()=>{
               this.fetchPrices();
           });

       localStorage.setItem('cryptoDash', JSON.stringify({
           favorites: this.state.favorites
       }))
    }

   
    addCoin = key =>{
        let favorites = [...this.state.favorites];

        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites})
        }
    }

    removeCoin = key => {
    
      let favorites = [...this.state.favorites];
    
      this.setState({favorites: _.pull(favorites, key)});
    
    }

    isInFavorites = key => _.includes(this.state.favorites, key)

    setFilterCoins = (filterCoins) => this.setState({filterCoins})


    fetchCoint = async () => {
        let coinList =  (await cc.coinList()).Data;
        this.setState({coinList})

        // console.log(coinList)
    }

    fetchPrices = async ()=>{

        if(this.state.firstVisit) return;

        let prices = await this.prices();
        prices = prices.filter( prices => Object.keys(prices).length)
        this.setState({prices})
        // console.log('CoinPrice ', prices)
    }

    prices = async () =>{
        let returnData = [];

        for(let i = 0 ; i < this.state.favorites.length; i++){
            try {
                let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
                returnData.push(priceData)
            
            } catch (error) {
                console.warn('Fetch price error: ',error);    
                throw error(error)
            }
        }

        return returnData;
    }

    savedSettings(){
   
        let crytpoData = JSON.parse(localStorage.getItem('cryptoDash'));

        if(!crytpoData){
            return {page: "Settings", firstVisit: true}
        }

        let {favorites} = crytpoData;
        return{favorites}
    }

    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}