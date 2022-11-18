function TicketItem({ item, addToCart, removeFromCart}) {
    return (
      <div className="window" style={{ width: 220, display: "inline-block" }}>
        <div className="title-bar">
          <div className="title-bar-text">{item.name}</div>
        </div>
        <div className="window-body">
          <p>{item.description}.</p>
          <img className="TicketItem" src={item.image} alt={item.description} />
          <div style={{ flex: 1 }} />
          <p
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: '4px'
            }}
          >
            <b>${item.price}</b>
            <button onClick={(e) => addToCart(e, item)}>+</button>
            <button onClick={(e) => removeFromCart(e, item)}>-</button>
          </p>
        </div>
      </div>
    );
  }
  
  export default TicketItem;
  

