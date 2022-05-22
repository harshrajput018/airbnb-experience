import stars from './stars.png'
import novak from './novak.jpg'
export default function Card(props){
    return (
        <div className="card">

                <img className='ima1' src={novak} />
                <div className='ima'><img src={stars}/></div>
                <div className='head'>Life lessons with {props.name}</div>
                <div className='rate'>From {props.price} /person</div>

            </div>
            
    )
}