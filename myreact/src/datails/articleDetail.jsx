import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { ContainerDetail } from '../style/detailStyle'
import { ArticleMoc } from '../mocdata/articleMoc'

const ArticleDetail = () => {
    let {id} = useParams();
    let navigate = useNavigate();
    const data = ArticleMoc.find((value)=> value.id === Number(id));
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const handleBack = ()=>{
        navigate('/pages');
    }
    const handleNext = ()=>{
        const loc = window.location.href
        const num = loc.substring(loc.lastIndexOf('/')+1)
        if(num > 11){
            navigate('/pages/articledetail/12');
            alert("you have reached the last page!!!")
        } else{
            navigate('/pages/articledetail/' + (Number(num)+1));
        }
    }
    return (
    <ContainerDetail>
    <div className='detail'>
    <div className='button-wrap'>
        <button className="button-64" role="button" onClick={handleBack}><span className="text">Back ⏪</span></button>
        <button className="button-64" role="button" onClick={handleNext}><span className="text">Next ⏩️</span></button>
        </div>
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