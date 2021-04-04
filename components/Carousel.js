import styles from '../styles/Carousel.module.css'

export default function Carousel({project}) {
    const { API_URL } = process.env
    return (
        <>
            <div className={styles.main}>
                <img src={ API_URL + project.case.url}/>
            </div>
        </>
    )
}