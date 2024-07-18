export default function Product({img, name, price})
{
    return (
        <div className="product">
            <img className="product-img" src={img} alt={name}/>
            <h3>{name}</h3>
            <h1 className="price">{price}</h1>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}