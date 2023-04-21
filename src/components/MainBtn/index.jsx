import { useNavigate } from 'react-router-dom'
import './styles.css'

const MainBtn = ({ text='Volver' }) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <button className='mainBtn' onClick={goBack}>{text}</button>
    )
}

export default MainBtn