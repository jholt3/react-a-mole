import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer (props) {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore}  switch={setTheMole} handleClick={handleClick} /> : <EmptySlot switch={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )


}


export default MoleContainer