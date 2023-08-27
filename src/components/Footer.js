
import LOGO from '../assets/LOGO2.png'
import '../style/header-footer.css'

function Footer (){
    return (
        <footer>
            <div className='footer__items'>
                <img src={LOGO} alt="Logo Kasa noir et blanc" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer