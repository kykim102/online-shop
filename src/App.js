import { useEffect, useState } from 'react'
import './App.css'
import Content from './components/content/Content'
import Header from './components/header/Header'

function App () {
  const [itemData, setItemData] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
    )
      .then(res => res.json())
      .then(data => {
        setItemData(data)
        document.title = data.title
        setLoading(false)
      })
  }, [])

  return (
    <div className='App'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <>
          <Header cartItems={cartItems} />
          <Content
            itemData={itemData}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </>
      )}
    </div>
  )
}

export default App
