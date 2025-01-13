import React from 'react'
import { ArtcileLink, ContainerArticle } from '../../style/pagesStyle'
import { ArticleMoc } from '../../mocdata/articleMoc'

const Pagesheader = () => {
  return (
    <ContainerArticle>
      <div className='article'>
        <h1>Our Blog & Articles</h1>
        <p className='subtitle'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className='grid'>
        {
          ArticleMoc.map((value) => {
            return <ArtcileLink className='link' key={value.id} to={`./detail/${value.id}`}>
          <img src={value.article.photo} alt='none' />
          <p>{value.article.date || "none"}</p>
          <div className='div'>{value.article.title || "none"}</div>
          </ArtcileLink>
          })
        
        }
        </div>

      </div>
    </ContainerArticle>
  )
}

export default Pagesheader