import './App.css'
import { data } from '../src/data/etsy'
import Listing from './components/Listing';

function App() {
  const items = data;
  return (
    <>
      <Listing items={items} />
    </>
  )
}

export default App
