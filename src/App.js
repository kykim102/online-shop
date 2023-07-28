import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/content/Content'
import Header from './components/header/Header'

function App () {
  const [itemData, setItemData] = useState({
    id: 1,
    title: 'Classic Tee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 75,
    imageURL:
      'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
    sizeOptions: [
      {
        id: 1,
        label: 'S'
      },
      {
        id: 2,
        label: 'M'
      },
      {
        id: 3,
        label: 'L'
      }
    ]
  })
  const [cartItems, setCartItems] = useState([])

  // useEffect(() => {
  //   fetch(
  //     'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       setItemData(data)
  //     })
  // }, [])

  console.log(itemData)
  console.log(cartItems)
  return (
    <div className='App'>
      <Header cartItems={cartItems} />
      <Content
        itemData={itemData}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
    </div>
  )
}

export default App
