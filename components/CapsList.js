import Link from 'next/link';
import styles from '../styles/CapsList.module.css'


export default function CapsList({item}) {
  const { API_URL } = process.env

    return (
        <>
            <div className={styles.CapsList}>
                <Link href="/caps/[genere]/[cap]" as={`/caps/${item.slug}/${item.cap}`}>
                    <div>
                        <a># {item.cap}</a>
                    </div>
                </Link>
            </div>

        </>
    )
}

