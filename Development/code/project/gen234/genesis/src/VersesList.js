import React,{useState,useEffect} from 'react'
import Verse from './Verse'
function VersesList() {
    const [verses,setVerses]= useState([])
    useEffect(()=>{
        fetch("https://radiant-eyrie-05587.herokuapp.com/Verses")
        .then((res)=>res.json())
        .then((data)=>setVerses(data))
    },[])
    
  return (
    <div>
{verses.map((verse)=><Verse verse={verse} key={verse.id}/>)}
    </div>
  )
}

export default VersesList