import Link from 'next/link';
import styles from '../styles/HomeList.module.css'



export default function HomeList({project}) {
    const { API_URL } = process.env
    const caplist = project.Capitulos
    return (
        <>
            <div className={styles.cardHome}>
                   
                <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                    <img src={ API_URL + project.case.url}/>
                </Link>
                <div className={styles.ListDetails}>
                    <div>
                    <h2>{ project.title }</h2>
                    <a>Manga</a>
                    <a>Manhua</a>
                    <p></p>
                    </div>
                    <section>
                        <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length}`}>  
                        <a hidden={caplist.length <= 0}> <p>#{parseInt(caplist.length)}</p> </a>   
                        </Link>
                            
                        <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length -1}`}>             
                            <a hidden={caplist.length -1 <= 0}><p>#{parseInt(caplist.length -1)}</p>  </a>   
                        </Link>
                        <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length -2}`}>             
                            <a hidden={caplist.length -2 <= 0}><p>#{parseInt(caplist.length -2)}</p></a>     
                        </Link> 
                    </section>
                </div>
                    <div className={styles.LeftContent}>
                        <p>Avaliações</p>
                        <p>8/9</p>
                    </div>
            </div>
        </>
    )
}
