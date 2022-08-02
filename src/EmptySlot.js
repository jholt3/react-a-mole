import {useEffect} from 'react'
import moleHill from './molehill.png'

function EmptySlot(props){
    useEffect(() => {
       
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.switch(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleHill} />
        </div>
    )
}

export default EmptySlot