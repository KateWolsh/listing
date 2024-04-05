import Item from '../../src/components/Item'
import { ItemEntity } from '../ItemEntity';

interface ListingProps {
    items: ItemEntity[];
}

function Listing({ items }: ListingProps) {
    
      return (
        <div className="item-list">
        {items.map(item => (
          <Item item={item} key={item.listing_id}/>
        ))}
        </div>
      )
    }
    
    export default Listing