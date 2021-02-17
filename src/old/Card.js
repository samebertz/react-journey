function Card() {
  return (
    <div className="card">
      <img src={props.mainImg.src} id="mainImg"/>
      {props.eImg.map(e => {
        <img src={e.src} className="eImg"/>
      })}
      {props.sImg.map(s => {
        <img src={s.src} className="sImg"/>
      })}
      {props.items.map(i => {
        <div className="cardItem">{i.content}</div>
      })}
    </div>
  );
}

export default Card;