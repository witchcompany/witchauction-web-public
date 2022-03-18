import React from 'react';
import styles from './Footer.scss';

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h3>GOT ANY QUESTIONS?</h3>
        <p>Join our Discord server for customer support</p>
        <div className={styles.discord}>
          <a href="https://discord.gg/rNf2DswSNK" target="_blank">
            <span className={styles.icon_discord}></span>
            Discord
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
          <div className={styles.sns}>
            <a href="https://discord.gg/rNf2DswSNK" target="_blank" className={styles.discord}></a>
            <a href="https://twitter.com/witchwitch_sns" target="_blank" className={styles.twitter}></a>
            <a href="https://www.instagram.com/witchtoken_official/" target="_blank" className={styles.instagram}></a>
            <a href="https://medium.com/witch-official" target="_blank" className={styles.medium}></a>
          </div>
          Copyright © 2021 Witch Pte, Ltd. All rights reserved.
          <p>Company no. 892-88-02268</p>
        </div>
    </footer>
    </>
  )
}
