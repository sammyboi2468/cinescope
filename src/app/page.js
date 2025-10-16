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
      finally{
        setLoading(false)
      }
    }
    return(<div className="min-h-screen bg-gray-950 flex items-center justify-center"> 
              <div className=" rounded-2xl bg-gray-900 h-180 w-[60%] ">
                   <h1 className="text-gray-100 sm:text-3xl md:text-5xl p-4 ">CineScope</h1>
                   <div className="flex justify-center">
                      <input placeholder="Search" className=" text-center text-xl border border-b rounded-sm h-10 w-[60%] bg-gray-700 text-gray-300"/>
                      <button className=" bg-gray-700 ml-5 text-gray-200 w-28 rounded-md hover:bg-black">Search</button>
                      <div className="grid grid-cols-4 p-2">
                        
                      </div>
                   </div>
      </div>

    </div>)
  }
