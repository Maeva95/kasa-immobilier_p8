import styles from '../Home/Home.module.scss'
import imageHero from '../../assets/images/imagehero.png'
import Card from '../../components/Card';
import HeroImage from '../../components/HeroImage';
import Loader from '../../components/Loader'
import FetchData from '../../data/fetchData'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {

    const url = '/logement.json'
    const apartment = FetchData(url)
    
    if (apartment.isLoading) {
        return <Loader />
    }
    if (apartment.error) {
        return <div>Erreur de chargement...</div>
    }

    return (
        <>
        <Header/>
        <main className={styles.mainContainer}>
            <HeroImage>
                <img src={`${imageHero}`} alt="bannière" />
                <h1>Chez vous, partout et ailleurs</h1>
            </HeroImage>
            <ul className={styles.gallery}>
                {apartment.dataLog.map(({id, title, cover}) =>
                    <li key={id}>
                        <Card
                            id={id}
                            title={title}
                            cover={cover}
                        />
                    </li>
                )}
            </ul>
        </main>
        <Footer/>
        </>
    )
}