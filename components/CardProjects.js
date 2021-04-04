import Link from 'next/link';
import styles from '../styles/CardProjects.module.css'


export default function CardProjects({project}) {
  const { API_URL } = process.env

    return (
        <>
            <div className={styles.cardHome}>
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                    <div>
                        <img src={ API_URL + project.case.url}/>
                        <p dangerouslySetInnerHTML={{ __html: project.title }}/>                    
                    </div>
                </Link>
            </div>
        </>
    )
}