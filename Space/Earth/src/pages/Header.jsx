import { Link } from 'react-router-dom';
import { ImVk, ImTelegram, ImInstagram, } from 'react-icons/im'
import Logo from '../img/header/logo.svg'
import MobileMenu from '../components/MobileMenu/MobileMenu';
import useAuth from '../hook/useAuth';

function Header() {
    const { admin } = useAuth()

    return (
        <header className="header">
            <nav className='navBar'>
                <div>
                    <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                </div>
                <div className="navBar__menuWrapper">
                    <div>
                        <ul className="navBar__menu">
                            <Link className="navBar__link" to={'/'}>Главная</Link>
                            <Link className="navBar__link" to={'/about'}>Обо мне</Link>
                            <Link className="navBar__link" to={'/price'}>Прайс</Link>
                            <Link className="navBar__link" to={'/portfolio'}>Портфолио</Link>
                            <Link className="navBar__link" to={'/order'}>Записаться</Link>
                        </ul>
                    </div>
                    <Link className='loginBtn' to={'/admin'}>{admin.login ? 'Login' : 'Привет'}</Link>
                    <div>
                        <ul className="navBar__social">
                            <li>
                                <a href="/" target='_blank'><ImInstagram /></a>
                            </li>
                            <li>
                                <a href="/" target='_blank'><ImTelegram /></a>
                            </li>
                            <li>
                                <a href="/" target='_blank'><ImVk /></a>
                            </li>
                        </ul>
                    </div>
                    <MobileMenu admin={admin}/>
                </div>
            </nav>
        </header>
    )
}

export default Header;