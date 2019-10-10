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
    }

    confirmFavorites = () =>{
       this.setState({page: 'Dashboard', firstVisit: false});

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