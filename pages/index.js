import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CardHome from './../components/CardHome';
import TopList from './../components/TopList'
import HomeList from './../components/HomeList'
import axios from 'axios'
import Carousel from './../components/Carousel'

export default function Home({projects , dataTopList}) {
 
  return (
    <>
      <div className={styles.containerHome}>
        <div className={styles.main}>          
          <div className={styles.carousel}>          
            {projects.map(project => (
              <Carousel key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.topContent}>      

            {projects.map(project => (
              <CardHome key={project.id} project={project} />
            ))}
          </div>
          <div className={styles.ListContent}>
            {projects.map(project => (
                <HomeList key={project.id} project={project} />
            ))}
          </div>
        </div>
          
        <div className={styles.sidebar}>          
          <div className={styles.sidebarTopList}> 
            <p>TOP 10</p>
            {dataTopList.map((project,index) => (
              <TopList key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
        
      </div>
      </>
  )
}

export async function getServerSideProps() {
  const { API_URL } = process.env  
  const { data : projects } = await axios(`${API_URL}/projects?_limit=8`)
  const { data : dataTopList } = await axios(`${API_URL}/projects?_sort=id:DESC&_limit=10`)
  return {
    props: {
      projects,
      dataTopList
    }
  }
}