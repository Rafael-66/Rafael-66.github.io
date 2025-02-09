function PlayedCard(props:any){
    const CARD_STROKE = 4

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
            return (<svg width="130" height="230" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="180" x="5" y="5" rx="20" ry="20" fill="#1961fc" stroke="black" strokeWidth={CARD_STROKE}/>
            <text x="65" y="130" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{parseNum(props.data.number)}</text>
            </svg>)
        } else if (i == 1) {
            return (<svg width="130" height="230" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="180" x="5" y="5" rx="20" ry="20" fill="#fc2121" stroke="black" strokeWidth={CARD_STROKE} />
            <circle cx="65" cy="95" r="40" fillOpacity="0.4"/>
            <text x="65" y="130" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{parseNum(props.data.number)}</text>
            </svg>)
        } else if (i == 2) {
            return (<svg width="130" height="230" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="180" x="5" y="5" rx="20" ry="20" fill="#fafa20" stroke="black" strokeWidth={CARD_STROKE} />
            <rect width="60" height="60" x="35" y="65" fillOpacity="0.4"/>
            <text x="65" y="130" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{parseNum(props.data.number)}</text>
            </svg>)
        } else if (i == 3) {
            return (<svg width="130" height="230" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="180" x="5" y="5" rx="20" ry="20" fill="#20fa48" stroke="black" strokeWidth={CARD_STROKE} />
            <rect width="40" height="40" x="65" y="95" fillOpacity="0.4"/>
            <rect width="40" height="40" x="25" y="55" fillOpacity="0.4"/>
            <text x="65" y="130" textAnchor="middle" fontSize="100" fill="white" stroke="black" strokeWidth="2">{parseNum(props.data.number)}</text>
            </svg>)
        } else if (i == -1) {
            return
        }
    }

return (
    parseData(props.data.color)
    )
}

export default PlayedCard