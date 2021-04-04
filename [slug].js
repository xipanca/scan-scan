import fetch from 'isomorphic-unfetch'
import getConfig  from 'next/config';
import Link from 'next/link';
import CapsList from './components/CapsList';

export default function Main({project}) {
    const { API_URL } = process.env
    const caps = project.Capitulos

    return (
        <>
            <div className="mainProject">
                <h1>{project.title}</h1>     
                <div>          
                    <img src={ API_URL + project.case.url}/>
                    <p>{project.description}</p>                    
                </div>
                <h2>Capitulos</h2>                
                {caps.map(item => (
                    <CapsList key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const { slug }  = context.query
    const res = await fetch(`${API_URL}/${slug}`)
    const data = await res.json()

    return {
        props : {
            project : data[0]
        }
    }
}
