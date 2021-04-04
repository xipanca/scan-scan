import { useRouter } from 'next/router';
import styles from '../styles/PaginationButttons.module.css'

export default function PaginationButttons({page, lastPage}) {
    const router = useRouter()
    return (
        <div className={styles.ActionButtons}>
          <button className={styles.button1} disabled={page <= 1} onClick={() => router.push(`/projects?page=${page - 1}`)}>Voltar</button>
            <a>{page}</a>
          <button  className={styles.button2} disabled={page >= lastPage} onClick={() => router.push(`/projects?page=${page + 1}`)}>proximo</button>
        </div>
    )
}