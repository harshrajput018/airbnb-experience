import stars from './stars.png'
import novak from './novak.jpg'
import './bottom.css'
import Card from './card'


export default function Bottom() {
    return (
        <div className='bottom'>
            <Card name='Novak Djokovic' price='200$'/>
            <Card name='Roger Federer' price='250$'/>
            <Card name='Roger Federer' price='250$'/>
            <Card name='Harsh' price='255$'/>
            
        </div>

    )
}