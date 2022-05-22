import './container.css'
import image from './image.png'
import Nav from './nav'
import Bottom from './bottom'

export default function Container() {
    return (
        <div className="container">
            <Nav />
            
            <img className='img' src={image} />
            <div>
                <h1>Online Experiences</h1>
                <div className='para'>
                    <p>
                        Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.
                    </p>
                </div>

            </div>
            <Bottom/>
        </div>
    )
}