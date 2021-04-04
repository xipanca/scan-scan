import Link from "next/link";
import styles from '../styles/NavLinks.module.css'
import { useRouter } from "next/router"

export default function NavLinks({pages}) {
    const router = useRouter()

    return (        
        <div className={styles.navHeader}>
            <ul>
                {pages.map(item => (
                    <section key={item.id}>
                        <Link href={item.slug}>
                            <a className={router.pathname === item.slug ? styles.active : ''}>{item.page}</a>
                        </Link>
                    </section>
                ))}             
            </ul>
        </div>
    )
}