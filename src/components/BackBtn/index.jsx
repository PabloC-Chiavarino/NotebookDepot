import { useNavigate } from 'react-router-dom'
import './styles.css'

const BackBtn = ({ text='Volver' }) => {
    const navigate = useNavigate()
    const handleOnClick = () => navigate(-1)

    return (
        <button className='mainBtn' onClick={handleOnClick}>{text}</button>
    )
}

export default BackBtn