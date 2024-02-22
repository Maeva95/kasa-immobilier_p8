import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/images/LOGO_home.png'
import style from '../Header/Header.module.scss'



export default function Header() {
    return (
        <header>
            <nav className={style.nav}>
                <img src={`${logoHeader}`} alt='logo Kasa' className={style.nav__logo}/>
                <ul className={style.nav__liste}>
                    <li className={style.nav__liste__li}>
                        <NavLink className={({isActive}) => isActive ? style.nav__linkActive : style.nav__link} to='/home'>Accueil</NavLink>
                        <NavLink className={({isActive}) => isActive ? style.nav__linkActive : style.nav__link} to='/about'>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}