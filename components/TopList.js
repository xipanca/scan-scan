import Link from 'next/link';
import styles from '../styles/TopList.module.css'


export default function TopList({project, index}) {
  const { API_URL } = process.env
    return (
        <>
            <div className={styles.TopListCard}>
                    <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                        <div className={styles.Item}>
                            <div className={styles.Poss}>{index +1}</div>                       
                            <div className={styles.Title}>{project.title}</div>
                        </div> 
                    </Link> 
            </div>
        </>
    )
}