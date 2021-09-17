import Head from 'next/head';

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
          <Head>
            <script type="text/javascript" src="/scripts/board.js"></script>
            <script type="text/javascript" src="/scripts/minimax.js"></script>
          </Head>
          
        </div>
  )
}