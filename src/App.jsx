import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './JSON/quotes.json'

function App() {
  const colors = ['#293462','#F24C4C','#EC9B3B','#F7D716','#7D1E6A','#EEB0B0','#FFE59D','#BDE6F1','#FFEF82','#EFD345','#BABD42','#82954B','#F9D923','#36AE7C','#187498','#064635','#519259']

  const numRandom = array =>{
    return Math.floor(Math.random() * array.length)
  }

  const getElementRandom = array => {
    const i = numRandom(array)
    return array[i]
  }

  const [colorRandom, setcolorRandom] = useState(getElementRandom(users))
  const [userRandom, setuserRandom] = useState(getElementRandom(colors))

  const clickButton = () => {
    setuserRandom(getElementRandom(users))
    setcolorRandom(getElementRandom(colors))
  }
  
  const style = {
    backgroundColor: colorRandom
  }

  return (
    <div style={style} className="App">
      <Card 
       colorRandom={colorRandom}
       userRandom={userRandom}
       clickButton={clickButton}
      />
    </div>
  )
}

export default App
