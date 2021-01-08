import React, { useEffect, useState } from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'


function Body() {

    const [items, setitems] = useState([])

    useEffect(() => {

        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        .then(response=>response.json())
        .then(data=>{setitems(data.meals)})

    }, [])

    const itemsList= items.map(item=>{
        return  <div className="col-md-4">
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb} alt="Meal"/>
            <p>{item.idMeal}</p>
        </div>
        
    })

    return (
        <div>
            <div className="row mt-5">
                {itemsList}
            </div>
        </div>
    )
}

export default Body
