import Link from 'next/link';
import styles from '../styles/CardHome.module.css'


export default function CardHome({project}) {
  const { API_URL } = process.env
  const caplist = project.Capitulos
    return (
        <>
            <div className={styles.cardHome}>
                    <div>
                        <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
                            <img src={ API_URL + project.case.url}/>
                        </Link>
                        
                        <div className={styles.cardContent}>
                            <p dangerouslySetInnerHTML={{ __html: project.title }}/> 
                            <p>Avaliação: 8/10 </p>
                            <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length}`}>  
                              <a hidden={caplist.length <= 0}> <p># {parseInt(caplist.length)}</p> </a>   
                            </Link>                            
                        </div>
                    </div>
            </div>
        </>
    )
}


// export default function CardHome({project}) {
//     const { API_URL } = process.env
//     const caplist = project.Capitulos
//       return (
//           <>
//               <div className={styles.cardHome}>
//                       <div>
//                           <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
//                               <img src={ API_URL + project.case.url}/>
//                           </Link>
                          
//                           <section>
//                               <h2 dangerouslySetInnerHTML={{ __html: project.title }}/> 
//                               <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length}`}>  
//                                 <a hidden={caplist.length <= 0}> <p>Cap: {parseInt(caplist.length)} <span> Novo </span></p> </a>   
//                               </Link>
                                  
//                               <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length -1}`}>             
//                                   <a hidden={caplist.length -1 <= 0}><p>Cap: {parseInt(caplist.length -1)} <span> Novo </span></p>  </a>   
//                               </Link>
//                               <Link href="/caps/[genere]/[cap]" as={`/caps/${project.slug}/${caplist.length -2}`}>             
//                                   <a hidden={caplist.length -2 <= 0}><p>Cap: {parseInt(caplist.length -2)} <span> Novo </span></p></a>     
//                               </Link> 
//                           </section>
//                       </div>
//               </div>
//           </>
//       )
//   }