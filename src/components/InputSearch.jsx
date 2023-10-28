import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "../assets/style/InputSearch.css"


const InputSearch = ({ setWeather, setIsError}) => {

    const [search, setSearch] = useState()

    const inputSearch = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(inputSearch.current.value.toLowerCase().trim())
        inputSearch.current.value = ""
    }

    useEffect(() => {
        if (search) {
            const APIKey = 'd253c4ce42914136aea7b48043b6d308'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKey}`
            axios.get(url)
                .then(res => {
                    setWeather(res.data)
                    setIsError(true)
                })
                .catch(() => {
                    setIsError(false)
                    setWeather(search)
                })
        }
    }, [search])

    return (
        <>
            <article className='input__article'>
                <form onSubmit={handleSubmit} className='input__form'>
                    <input type="text" ref={inputSearch} className='input__input' placeholder="Name of City..."/>
                    <button className='input__btn'><img className="input__icon" src="/bx-search-alt-2.svg"></img></button>
                </form>
            </article>

        </>
    )
}

export default InputSearch
