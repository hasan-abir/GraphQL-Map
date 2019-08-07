import React, {useState} from 'react'
import FoodBranch from './FoodBranch'


export default function FastFood({name, tagline, logo, branches}) {
    const [isOpen, setIsOpen] = useState(false)

    const onClick= () => {
        setIsOpen(!isOpen)
    }

    const branchList = branches.map(branch => {
        return <FoodBranch classList={isOpen? 'food-branch branch-active' : 'food-branch'} key={branch.id} branch={branch}/>
    })

    return (
        <>
            <div className={`fast-food ${name}`} onClick={onClick}>
                <div className="content">
                    <div className="fast-food-logo"><img src={logo} alt=""/></div>
                    <div className="fast-food-text">
                        <h1>{name}</h1>
                        <h2>{tagline}</h2>
                    </div>
                </div>
                <div className={isOpen? 'expand-icon active': 'expand-icon'}>
                    <div className="line-one"></div>
                    <div className="line-two"></div>
                </div>
            </div>
            {branchList}
        </>
    )
}
