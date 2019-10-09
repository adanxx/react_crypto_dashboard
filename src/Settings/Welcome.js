import React from 'react';
import {AppContext} from '../App/AppProvider';

const Welcome = ({firstVisit}) =>{
    return(
        <AppContext.Consumer>
            {({firstVisit})=>
            firstVisit ? <div>
                Welcome to CrytoDash, please select yout favorite coins to begin.{' '}
            </div>: null 
           }
        </AppContext.Consumer>
    )
}

export default Welcome;