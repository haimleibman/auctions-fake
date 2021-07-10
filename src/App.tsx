import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import css from './App.module.scss';
import Auction from './auction/Auction';
import IAuction from './models/auction.model';

function App() {
  const [auctions, setAuctions] = useState<IAuction[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/auctions');
      setAuctions(await res.json());
    })();
  }, [])

  return (
    <div className={css.App}>
      {auctions.map((auction: IAuction, i) => <Auction key={i} auction={auction} />)}
    </div>
  );
}

export default App;
