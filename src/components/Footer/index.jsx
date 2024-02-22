import logoFooter from '../../assets/images/LOGO.png'
import '../Footer/Footer.module.scss'


export default function Footer() {
    return (
        <footer>
            <img src={`${logoFooter}`} alt="logo Kasa" className='logo-footer'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}