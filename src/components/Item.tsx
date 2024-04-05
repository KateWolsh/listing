import { ItemEntity } from "../ItemEntity"

interface ItemProps {
    item: ItemEntity;
}

function Item({ item }: ItemProps) {
    if (!item || !item.title) {
        return null;
    }
    const truncatedTitle = item.title.length > 50 ? item.title.slice(0, 50) + '…' : item.title;
    const formattedPrice =
        item.currency_code === 'USD' ? `$${item.price}` :
        item.currency_code === 'EUR' ? `€${item.price}` :
        `${item.price} ${item.currency_code}`;

    const checkQuantity = 
        parseInt(item.quantity) <= 10 ? 'level-low' :
        parseInt(item.quantity) <= 20 ? 'level-medium':
        'level-high';

    const itemClassName = `item-quantity ${checkQuantity}`;
        
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt=''/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{truncatedTitle}</p>
                <p className="item-price">{formattedPrice}</p>
                <p className={itemClassName}>{item.quantity}</p>
            </div>
        </div>
    );
}

  
  export default Item