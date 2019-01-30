import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import CoinGrid from './CoinGrid';
import Page from '../Shared/Page';
import Search from './Search';

export default function () {
  return (
    <Page name="settings">
      <div>
        <WelcomeMessage />
        <CoinGrid topSection />
        <ConfirmButton />
        <Search />
        <CoinGrid />
      </div>
    </Page>
  )
}