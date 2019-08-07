import React, {useState} from 'react'
import FastFoodList from './FastFoodList'

export default function SearchFastFood () {
    const [fastfoodinput, setFastFoodInput] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const onChange = e => {
        setSubmitted(true)
        setFastFoodInput(e.target.value)
    }
    return (
        <div className="container">
            <div className="search-food">
                <form>
                    <select name="fastfoodinput" value={fastfoodinput} onChange={onChange}>
                        <option value="" disabled>Choose A Fast Food Chain</option>
                        <option value="All">All</option>
                        <option value="Pizza Hut">Pizza Hut</option>
                        <option value="Takeout">Takeout</option>
                        <option value="Shawarma House">Shawarma House</option>
                        <option value="KFC">KFC</option>
                        <option value="American Burger">American Burger</option>
                    </select>
                </form>
            </div>
            {submitted?<FastFoodList fastfoodinput={fastfoodinput}/>: null}
        </div>
    )
}

