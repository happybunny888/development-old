function TicketItem({item, addToCart, removeFromCart}) {
    return (
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">{item.name}</div>
        </div>
        <div className="window-body">
          <p>
            <span className="ticket-Item-description">{item.description}</span><br></br>
            <span className="ticket-Item-rating"><strong>Rating:</strong>{item.rating}</span>&nbsp;
            <span className="ticket-Item-type"><strong>Type:</strong>{item.type}</span>
          </p>
          <img className="ticket-Item" src={item.image} alt={item.name} />
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
  

