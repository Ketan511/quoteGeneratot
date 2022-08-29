import React,{useState} from 'react'
import axios from "axios";
import './style.css'


const baseURL='https://quote-garden.herokuapp.com/api/v3/quotes?&limit=100'

export default function QuoteBox() {
const [data, setData] = useState("All diseases run into one, old age.")
const [author, setAuthor] = useState("Ralph Waldo Emerson")
const [genere, setGenere] = useState("age")
const [allQuote, setAllQuote] = useState([{}])

function Reload()
{
  axios.get(baseURL)
  .then((response) => {
    const data=response.data.data
    const rand=Math.floor(Math.random()*100)+1
    let quote=data[rand].quoteText
    setData(quote)
    let auth=data[rand].quoteAuthor
    setAuthor(auth)
    let gen=data[rand].quoteGenre
    setGenere(gen)
    
    
  });
}
function GetAllQuote()
{
  axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?&limit=10&author=${author}`)
  .then((response)=>{
    const data=response.data.data
   
    setAllQuote(data)
    allQuote.map ((allQuote)=>{
        console.log(allQuote.quoteText)
      })
    
      
})
}

  return (
    <>
    
    <div class="container">
    <div class="quote-box">
      <p id="quote">{data}</p>
      <small id="author">{author}</small>
     
    
    <h5>Genere-{genere}</h5>

    </div>
    <button id="btn" onClick={Reload}>New Quote</button>
    {/* <button id="btn" onClick={GetAllQuote}>Get all the quotes</button> */}
    
  </div>



</>
  )
}
