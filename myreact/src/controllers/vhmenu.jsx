import React from 'react'
import { Container, dataList } from '../lesson/caravan'

const Vhmenu = () => {
    return (
        <div className='grid'>
        {dataList.map((value) => {
                return <Container key={value.id} className='grid_card' to={`./detail/${value.id}`}>
                <p>{value.car.name || "broken data"}</p>
                <p>{value.car.company}</p>
                <p>{value.car.company}</p>
                <p>{value.car.cost}</p>
                <p>{value.car.date}</p>
                </Container>
            })}
        </div>
    
    )
}

export default Vhmenu