import React from 'react'
import {useParams} from 'react-router-dom'
import { ContainerDetail } from '../style/detailStyle'
import { ArticleMoc } from '../mocdata/articleMoc'

const ArticleDetail = () => {
    let {id} = useParams();
    const data = ArticleMoc.find((value)=> value.id === Number(id));
    return (
    <ContainerDetail>
    <div className='detail'>
        <h2>
        & {data.article.title} &.
        </h2>
        <img src={data.article.photo} className='meal'/>
        <div className='wrapper'>
        <div className='subtitle'>
        {data.article.text}
        </div>
        <p className='text'>
        {data.article.under}
        </p>
        <div className='subtitle'>
            Essential ingredients
        </div>
        <p className='text'>
        {data.article.ing}
        </p>
        <ol className='ul'>
        <li><b>Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
        <li><b>Seasoning:</b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
        <li><b>Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
        <li><b>Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
        <li><b>Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>
        <div className='subtitle'>
        Tools you need
        </div>
        <p className='text'>
            {data.article.tool}
        </p>
        </div>
        <div className='wrapper'>
        <div className='subtitle'>
        Conclusion for this articlle
        </div>
        <p className='text'>{data.article.conc}</p>
        </div>
        </div>
    </ContainerDetail>
    )
}

export default ArticleDetail