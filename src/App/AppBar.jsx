import React from 'react';
import styled, {css} from 'styled-components';

const Logo = styled.div`
  font-size: 1.5rem;
`

const ControlButtonElement = styled.div`
  cursor:pointer;

  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03;
  `}
`;

function toProperUpperCase(lower){
   return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name, active}){
  return (<ControlButtonElement active={active}>
         {toProperUpperCase(name)}
  </ControlButtonElement>)
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
          <Logo>CrytoDash</Logo>
           <div></div>
           <ControlButton active name="Dashboard"/>
           <ControlButton name="Settings"/>
        </Bar>
    )
}