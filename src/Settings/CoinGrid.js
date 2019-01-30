import React from 'react';
import style from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { SelectableTile } from '../Shared/Tile';

export const CoinGridStyled = style.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`

export default function () {
  return (
    <AppContext.Consumer>
      {({ coinList }) =>
        <CoinGridStyled>
          {Object.keys(coinList).map(coinKey =>
            <SelectableTile> {coinKey} </SelectableTile>
          )}
        </CoinGridStyled>
      }
    </AppContext.Consumer>
  )
}