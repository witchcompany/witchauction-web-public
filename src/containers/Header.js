import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './Header.scss';

function Header(props) {
  return (
    <>
      <header>
        <nav className={styles.header}>
          <Link to="/" className={styles.logo}>witchauction</Link>
          <div className={styles.heade_right}>
            <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=1&outputCurrency=0xdc524e3c6910257744c1f93cf15e9f472b5bd236&inputCurrency=eth"  target="_black"className={styles.buy_witch}>Buy WITCH</a>
            <div className={cx(styles.default, styles.connect)}>
              <div className={styles.witch}>
                <span className={styles.icon_metamask}></span>
                Connect Wallet
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
