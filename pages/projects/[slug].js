import getConfig  from 'next/config';
import axios from 'axios'
import CapsList from './../../components/CapsList';
import styles from './../../styles/mainProject.module.css'

export default function project({project}) {
    const { API_URL } = process.env 
    const caps = project.Capitulos
    const count = project.Capitulos.length
    return (
        <>
            <div className={styles.mainProject}>
                <h1>{project.title}</h1>     
                <div className={styles.mainCase}>          
                    <img src={ API_URL + project.case.url}/>
                    <section> 
                        <h1>Descrição:</h1> {project.description}
                        <h2>Capitulos: {count}</h2>
                    </section>                    
                </div>
                <h2>Capitulos</h2>                
                <div className={styles.contentCaps}>
                    {caps.map(item => (
                        <CapsList key={item.id} item={item} count={count}/>
                    ))}
                </div>
            </div>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const { slug }  = context.query
    const { data : project} = await axios(`${publicRuntimeConfig.API_URL}/projects?slug=${slug}`)

    return {
        props : {
            project : project[0]
        }
    }
}
