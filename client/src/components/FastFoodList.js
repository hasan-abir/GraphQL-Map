import React from 'react'
import {graphql} from 'react-apollo'
import {getFastFoodQuery} from '../query'
import FastFood from './FastFood'
import spinner from '../spinner.svg'

function FastFoodList({fastfoodinput, data}) {
    if(data.loading){
        return (
            <div className="loader"><h1>LOADING</h1> <img src={spinner} alt=""/></div>
        )
    } else{
        const filteredList = data.fastfoods.filter(fastfood => {
            return fastfood.name === fastfoodinput
        })

        if(fastfoodinput === 'All'){
            return data.fastfoods.map(item => {
                return (
                    <FastFood key={item.id} name={item.name} tagline={item.tagline} logo={item.logo} branches={item.branches}/>
                )
            })
        }

        return filteredList.map(item => {
            return (
                <FastFood key={item.id} name={item.name} tagline={item.tagline} logo={item.logo} branches={item.branches}/>
            )
        })
    }
}

export default graphql(getFastFoodQuery)(FastFoodList)
