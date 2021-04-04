import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/ActionButtons.module.css'
import { project } from '../pages/projects/[slug].js'


export default function ActionButtons({cap , genere, count }) {
    
    const router = useRouter()
    let lastpage = parseInt(count)
    let IntoPage = parseInt(cap)

    return (
        <>
           <div className={styles.buttons}>
                <button className={IntoPage <= 1 ? styles.disabled : '' } disabled={IntoPage <= 1} onClick={() => router.push(`/caps/${genere}/${IntoPage - 1}`)
                    .then(()=>{
                        router.reload()
            })}>Voltar</button>
                <button className={IntoPage == lastpage ? styles.disabled : styles.acitve } disabled={ IntoPage == lastpage-1 } onClick={() => router.push(`/caps/${genere}/${IntoPage + 1}`)
                    .then(()=>{
                        router.reload()
                    })} >proximo</button>
            </div>
        </>
    )
    
}