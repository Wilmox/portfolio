import Script from 'next/script';

import styles from '../../../styles/Minimax.module.css';
import { useEffect } from 'react';

export default function PlayTicTacToePage() {
  useEffect(() => {
    window.addEventListener("load", function(){
      setup();
    });    
  })
  return (

      
        <div id="tic-tac-toe" className={styles.tic_tac_toe}>
          <Script src="/scripts/board.js"></Script>
          <Script src="/scripts/minimax.js"></Script>
        </div>
  )
}