import './styles.css'

const OpacityDiv = ({ show, handleShowCart }) => {
    return (
        <div 
        className='opacityDiv'
        style={{ display: show ? 'block' : 'none' }}
        onClick={handleShowCart}
        />
    )
}

export default OpacityDiv