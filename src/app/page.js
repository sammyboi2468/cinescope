"use client"
import axios from "axios"
import { useState, useEffect } from "react"



export default function CineScope() {
  const [loading, setLoading] = useState(false) 
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState('')
  const [error, setError] =  useState('')

  const fetchMovies = async() => {
    if(!search) {
      setLoading(true)
    }
    try {
      const res = await axios.get(`http://www.omdbapi.com/?t=${search}&apikey=46fb7b95`)
      .then(setMovies(res.data))
    }
    catch(error){
      setError('Something went wrong')
    }
    return(<div className="min-w-full bg-blue-950">
      <div>
        <p>hello, welcome home</p>
      </div>

    </div>)
  }
} 