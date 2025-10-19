import { useState } from 'react'
import './App.css'

const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You can't change the direction of the wind, but you can always adjust your sails to reach your destination.",
  "Dreams don't come true if you don't take action.",
  "Every day is a new opportunity to be better than yesterday.",
  "Believe in yourself and everything will be possible.",
  "Hard work beats talent when talent doesn't work hard.",
  "Don't stop until you're proud.",
  "Change starts with you.",
  "Be the change you want to see in the world.",
  "There is always a way, you just have to find it."
]

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  return (
    <div className="app">
      <h1>Motivational Quote Generator</h1>
      <div className="quote-container">
        <p className="quote">"{currentQuote}"</p>
      </div>
      <button className="generate-btn" onClick={generateQuote}>
        Generate New Quote
      </button>
    </div>
  )
}

export default App
