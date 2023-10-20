import {note1, note2, note3, note4} from '../../assets/imgs'
import './styles.css'

const Carousel = () => {
    return (
        <div className="slider">
			<ul>
				<li>
                    <img src={note1} alt=""/>
                </li>
				<li>
                    <img src={note2} alt=""/>
                </li>
				<li>
                    <img src={note3} alt=""/>
                </li>
                <li>
                    <img src={note4} alt=""/>
                </li>
			</ul>
		</div>
    )
}

export default Carousel
