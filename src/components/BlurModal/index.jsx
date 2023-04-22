
import './styles.css'

const BlurModal = ({ onBlurState }) => {
    return (
        <div 
        className='blurModal'
        style={{ display: onBlurState ? 'block' : 'none' }}
        />
    )
}

export default BlurModal