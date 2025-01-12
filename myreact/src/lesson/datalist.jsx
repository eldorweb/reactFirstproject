import React from 'react'
import { Container, Main, dataList } from './caravan'

const Datalist = () => {
  return (
    <Main>
      {
        dataList.map((value, index) => {
          return <Container key={value.id} to={`./detail/${value.id}`}>
            <p>{value.car.name || "broken data"}</p>
            <p>{value.car.company}</p>
            <p>{value.car.company}</p>
            <p>{value.car.cost}</p>
            <p>{value.car.date}</p>
          </Container>
        })
      }
    </Main>
  )
}

export default Datalist