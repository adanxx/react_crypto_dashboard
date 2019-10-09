import React from 'react';
const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            page: 'Dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount(){
        this.fetchCoint();
    }

    confirmFavorites = () =>{
       this.setState({page: 'Dashboard', firstVisit: false});

       localStorage.setItem('cryptoDash', JSON.stringify({
           test:'bangkok'
       }))
    }

    fetchCoint = async () => {
        let coinList =  (await cc.coinList()).Data;
        this.setState({coinList})

        console.log(coinList)
    }

    savedSettings(){
   
        let crytpoData = JSON.parse(localStorage.getItem('cryptoDash'));

        if(!crytpoData){
            return {page: "Settings", firstVisit: true}
        }

        return{}
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