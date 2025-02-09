import Card from "./Card";

function Hand(props:any){

  function handleData(d:any) {
    props.sendData(d)
  }

  function handleHover(d:any){
    props.sendHover(d)
  }

  console.log("rendering")

return(<>
<div className="position-absolute bottom-0 start-50 translate-middle-x">
  <svg width="800" height="220" xmlns="http://www.w3.org/2000/svg">
      {props.cards.map((i: any,index: any,arr: any) =>  <Card x = {((index+1)/(arr.length+1)*680)} color = {i.color} arrPos = {index} number = {i.number} sendData={handleData} sendHover={handleHover}/>)}
  </svg>
</div>
</>)
}

export default Hand