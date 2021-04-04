import getConfig  from 'next/config';
import { useRouter } from 'next/router';
import ViewCap from '../../../components/ViewCap';  
import ActionButtons from '../../../components/ActionButtons'
import axios from 'axios'

export default function viewCaps({data}) {
    const { API_URL } = process.env
    const router = useRouter()
    const cap =  router.query.cap
    const genere =  router.query.genere
    const pages = data.pages
    const count = data.pages.length    
   
    
    return (
        <>
            <div className="capsContainer">
                <div className="capsContent">
                    <div>
                        {pages.map(item => (
                            <ViewCap key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
                <ActionButtons cap={cap} genere={genere} count={count}/>                
            </div>
        </>
    )
}

const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps(context) {
    const { cap }  = context.query
    const { data } = await axios(`${publicRuntimeConfig.API_URL}/caps?cap=${cap}`)
    return {
        props : {
            data : data[0]
        }
    }
}
