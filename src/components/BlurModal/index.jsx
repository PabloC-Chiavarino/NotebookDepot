import './styles.css'

const BlurModal = ({ show, handleOnClick }) => {
    return (
        <div 
        className='blurModal'
        style={{ display: show ? 'block' : 'none' }}
        onClick={handleOnClick}
        />
    )
}

export default BlurModal