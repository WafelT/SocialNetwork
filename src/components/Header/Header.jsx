import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.logo}>
                    <div className={styles.logo__lines}>
                        <span></span>
                        <span></span>
                    </div>
                    <h1 className={styles.logo__name}>Connection</h1>
                    <div className={styles.logo__lines}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;