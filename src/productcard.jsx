function ProductCard(props) {
  return (
    <div>
      <h2>Product: {props.name}</h2>
      {props.price && <p>Price: ₹{props.price}</p>}
      {props.mark && <p>Mark: {props.mark}</p>}

    </div>
  );
}

export default ProductCard;