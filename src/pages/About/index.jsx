import imageHero from '../../assets/images/imageheroA.png'
import styles from '../About/About.module.scss'
import Collapse from "../../components/Collapse"
import HeroImage from "../../components/HeroImage"
import Loader from '../../components/Loader'
import FetchData from "../../data/fetchData"
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {

    const url = '/value.json'
    const value = FetchData(url)
    if (value.isLoading) {
        return <Loader />
    }
    if (value.error) {
        return <div>Erreur de chargement...</div>
    }

    return (
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <HeroImage>
                    <img src={`${imageHero}`} alt="bannière" />
                </HeroImage>
                <section className= {styles.description}>
                    {value.dataLog.map(({id, title, detail}) =>
                        <Collapse 
                            key={id} 
                            title={title} 
                            detail={<p>{detail}</p>} 
                        >
                        </Collapse>
                    )}
                </section>
            </main>
            <Footer/>
        </>
    )
}