//import { useState } from 'react'
import './App.css'
import Button from './Button'
import QuoteDisplay from './QuoteDisplay.jsx'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share'

export default function App() {

  return (
      <div className="card">
        <h1>Random Quote Generator</h1>
        <div>
          <QuoteDisplay quote="Hello" author="Me"/>
        </div>
        <div>
          <Button text="New Quote"/>
        </div>
        <div>
          <FacebookShareButton>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
  )
}
