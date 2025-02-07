function SelectedCard(props:any){
    const CARD_STROKE = 4

    function parseData(i:any){
        if (i == 0){
            return (<svg width="300" height="250" xmlns="http://www.w3.org/2000/svg">
            <text x="125" y="30" textAnchor="middle" fontSize="30">Carta selecionada:</text>
            <rect width="120" height="180" x="65" y="55" rx="20" ry="20" fill="#1961fc" stroke="black" strokeWidth={CARD_STROKE}/>
            <text x="125" y="180" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{props.data.number}</text>
            </svg>)
        } else if (i == 1) {
            return (<svg width="300" height="250" xmlns="http://www.w3.org/2000/svg">
            <text x="125" y="30" textAnchor="middle" fontSize="30">Carta selecionada:</text>
            <rect width="120" height="180" x="65" y="55" rx="20" ry="20" fill="#fc2121" stroke="black" strokeWidth={CARD_STROKE} />
            <circle cx="125" cy="145" r="40" fillOpacity="0.4"/>
            <text x="125" y="180" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{props.data.number}</text>
            </svg>)
        } else if (i == 2) {
            return (<svg width="300" height="250" xmlns="http://www.w3.org/2000/svg">
            <text x="125" y="30" textAnchor="middle" fontSize="30">Carta selecionada:</text>
            <rect width="120" height="180" x="65" y="55" rx="20" ry="20" fill="#fafa20" stroke="black" strokeWidth={CARD_STROKE} />
            <rect width="60" height="60" x="95" y="115" fillOpacity="0.4"/>
            <text x="125" y="180" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{props.data.number}</text>
            </svg>)
        } else if (i == 3) {
            return (<svg width="300" height="250" xmlns="http://www.w3.org/2000/svg">
            <text x="125" y="30" textAnchor="middle" fontSize="30">Carta selecionada:</text>
            <rect width="120" height="180" x="65" y="55" rx="20" ry="20" fill="#20fa48" stroke="black" strokeWidth={CARD_STROKE} />
            <rect width="40" height="40" x="125" y="145" fillOpacity="0.4"/>
            <rect width="40" height="40" x="85" y="105" fillOpacity="0.4"/>
            <text x="125" y="180" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{props.data.number}</text>
            </svg>)
        }
    }

    if (props.data.render == 0) {
        return
    } else {
        return parseData(props.data.color)
    }
}

export default SelectedCard