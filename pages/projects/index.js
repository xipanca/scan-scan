import styles from './../../styles/MainProjectList.module.css'
import CardProjects from '../../components/CardProjects'
import { useRouter } from 'next/router';
import axios from 'axios'
import PaginationButttons from '../../components/PagnationButtons';

export default function Projects({projects, page, countProjects, dataProjects}) {
    const router = useRouter()
    const lastPage = Math.ceil(countProjects / 4)
    return (
      <>
        <div className={styles.containerContact}>
          {projects.map(project => (
          <CardProjects key={project.id} project={project} />
          ))}
        </div>  
        <PaginationButttons page={page} lastPage={lastPage}/>
      </>
    )
  }
  
  export async function getServerSideProps({ query: {page = 1} }) {
    const { API_URL } = process.env
    const start = +page === 1 ? 0 : (+page - 1) * 4
    const { data : countProjects } = await axios(`${API_URL}/projects/count`)
    const { data : projects } = await axios(`${API_URL}/projects?_limit=4&_start=${start}`)
    const { data : dataProjects } = await axios(`${API_URL}/projects`)

    return {
      props: {
        projects,
        page: +page,
        dataProjects,
        countProjects
      }
    }
  }