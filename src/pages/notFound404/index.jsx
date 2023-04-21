import { Link } from 'react-router-dom'
import './styles.css'
import { MainBtn } from '../../components'

const NotFound404 = () => {
    return (
        <div className='default_container'>
            <h1>404 Not Found</h1>
            <h2>Ops!..</h2>
            <h3>La página solicitada no existe.</h3>
            <Link to={'/'}><MainBtn text={'Home'} /></Link>
        </div>
    )
}

export default NotFound404