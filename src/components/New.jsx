import React from 'react'
import { MyTask } from '../Task';
import Hero from "../asset/hero-banner.png";

const New = ({x}) => {
    // let MyTask = [
    //     {
    //         id: 1,
    //         name: "Tunde",
    //         age: 20
    //     },
    //     {
    //         id: 2,
    //         name: "Prosper",
    //         age: 22
    //     },
    //     {
    //         id: 3,
    //         name: "Quadri",
    //         age: 23
        
    //     },
    //     {
    //         id: 4,
    //         name: "Olamide",
    //         age: 24
    //     }

    // ]
  return (
    
    <>
    <div>New Generation same problem
    <h3>{x}</h3>
    
    </div>

    {MyTask.map((record) => {
        return(
            <div key={record.id}>
                <h1>{record.name}</h1>
                <p>{record.age}</p>
            </div>
        )
    })}
    <img src={Hero} alt={Hero} />




    </>
  )
}

export default New