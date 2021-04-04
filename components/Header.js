import Link from 'next/link'
import NavLinks from './NavLinks';
import styles from '../styles/Header.module.css'


export default function Header({pages}) {

    return (
        <>
            <header className={styles.headerContainer}>
                <Link href="/">
                    <section>
                        <img src="/logo.png" className={styles.headerLogo}></img>
                        <h1>Scan Scan</h1>
                    </section>
                </Link>
                <NavLinks pages={pages}/>
                <div className={styles.sidebar}>
                    <h1>DISCORD</h1>
                </div>
            </header>
        </>
    )
}