import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';


const Logo = styled.div`
  font-size: 1.5rem;
`

const ControlButtonElement = styled.div`
  cursor:pointer;

  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03;
    text-decoration:underline;
  `}
`;

function toProperUpperCase(lower){
   return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
    <AppContext.Consumer>
      {({page, setPage}) =>(
        <ControlButtonElement active={page === name} onClick = {()=> setPage(name) }>
         {toProperUpperCase(name)}
     </ControlButtonElement> 
    )}
    </AppContext.Consumer>  
  )
}

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px; 
  font-weight:550;
  font-size: 1rem;
`;

export default function (){
    return( 
        <Bar>
          <Logo>CryptoDash</Logo>
           <div></div>
           <ControlButton active name="Dashboard"/>
           <ControlButton name="Settings"/>
        </Bar>
    )
}