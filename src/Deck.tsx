function Deck(props:any){
    return (
        <>
        <svg width="130" height="230" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="180" x="5" y="5" rx="20" ry="20" fill="black" stroke="white" strokeWidth="4" onClick={props.click}/>
            <polygon points="65,52 85,72 65,92 45,72" fill="red" onClick={props.click}/>
            <polygon points="65,98 85,118 65,138 45,118" fill="blue" onClick={props.click}/>
            <polygon points="62,95 42,115 22,95 42,75" fill="green" onClick={props.click}/>
            <polygon points="68,95 88,115 108,95 88,75" fill="yellow" onClick={props.click}/>
        </svg>
        </>
        )
    }
    
export default Deck