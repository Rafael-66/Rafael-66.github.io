import { useState } from "react"

function Card(props:any){
    const [pos,setPos] = useState(30)
    const CARD_STROKE = 4

    function hover(){
        setPos(10)
        let dataPacket = {render: 1, color: props.color, number: props.number}
        props.sendHover(dataPacket)
    }

    function hoverEnd(){
        setPos(30)
        let dataPacket = {render: 0, color: 0, number: 0}
        props.sendHover(dataPacket)
    }

    function click(){
        let dataPacket = {color: props.color, pos: props.arrPos, number: props.number}
        props.sendData(dataPacket)
    }

    function parseNum(n:any){
        if (n == 10) {
            return "🛇"
        } else if (n == 11) {
            return "⭮"
        } else if (n == 12) {
            return "+2"
        } else {
            return n
        }
    }
    
    function parseData(i:any){
        if (i == 0){
            return (<>
            <rect width="120" height="180" x={props.x} y={pos} rx="20" ry="20" fill="#1961fc" stroke="black" strokeWidth={CARD_STROKE} onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <text x={props.x+60} y={pos+125} textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}>{parseNum(props.number)}</text>
            </>)
        } else if (i == 1) {
            return (<>
            <rect width="120" height="180" x={props.x} y={pos} rx="20" ry="20" fill="#fc2121" stroke="black" strokeWidth={CARD_STROKE}  onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <circle cx={props.x+60} cy={pos+90} r="40" fillOpacity="0.4" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <text x={props.x+60} y={pos+125} textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}>{parseNum(props.number)}</text>
            </>)
        } else if (i == 2) {
            return (<>
            <rect width="120" height="180" x={props.x} y={pos} rx="20" ry="20" fill="#fafa20" stroke="black" strokeWidth={CARD_STROKE}  onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <rect width="60" height="60" x={props.x+30} y={pos+60} fillOpacity="0.4" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <text x={props.x+60} y={pos+125} textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}>{parseNum(props.number)}</text>
            </>)
        } else if (i == 3) {
            return (<>
            <rect width="120" height="180" x={props.x} y={pos} rx="20" ry="20" fill="#20fa48" stroke="black" strokeWidth={CARD_STROKE}  onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <rect width="40" height="40" x={props.x+60} y={pos+90} fillOpacity="0.4" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <rect width="40" height="40" x={props.x+20} y={pos+50} fillOpacity="0.4" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}/>
            <text x={props.x+60} y={pos+125} textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2" onMouseEnter={hover} onMouseLeave={hoverEnd} onClick={click}>{parseNum(props.number)}</text>
            </>)
        }
    }

    return parseData(props.color)
}

export default Card