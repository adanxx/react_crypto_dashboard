// import React from 'react';
import Styled from 'styled-components';
import {greenBoxShadow, redBoxShadow, subtleBoxShadow, lightBlueBackground} from './Styles';

export const Tile = Styled.div`
   ${subtleBoxShadow}
   ${lightBlueBackground}
   padding: 10px;
`;

export const SeletableTile = Styled(Tile)`
   &:hover{
       cursor: pointer
       ${greenBoxShadow}
   }
`;

export const DeleteableTile = Styled(SeletableTile)`
   &:hover{
      cursor:pointer;
      ${redBoxShadow}
   }
`;

export const DisableTile = Styled(Tile)`
   pointer-events: none;
   opacity: 0.4;
`;

