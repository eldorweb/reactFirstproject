import React from 'react'
import {useParams} from 'react-router-dom'
import { ContainerDetail } from '../style/detailStyle'
import { MenuMocbar } from '../mocdata/menuMoc'

const Detail = () => {
  let {id} = useParams();
  const data = MenuMocbar.find((value)=> value.id === Number(id));
  return (
    <ContainerDetail>
      <div className='detail'>
        <h2>
        How to make & {data.menu.type} &.
        </h2>
        <img src={data.menu.photo} className='meal'/>
        <div className='wrapper'>
        <div className='subtitle'>
        What are the right ingredients to make it delicious?
        </div>
        <p className='text'>
        {data.menu.ing}
        </p>
        <div className='subtitle'>
          Preparation:
        </div>
        <p className='text'>
          {data.menu.prep}
        </p>
        <ol className='ul'>
          <li><b>Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
          <li><b>Seasoning:</b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
          <li><b>Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
          <li><b>Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
          <li><b>Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>
        <div className='subtitle'>
        Health Benefits:
        </div>
        <p className='text'>
          {data.menu.benefit}
        </p>
        </div>
        <img src={data.menu.photo2} className='meal'/>
        <div className='wrapper'>
        <div className='subtitle'>
        What are the right ingredients to make it delicious?
        </div>
        <p className='text'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
        </div>
      </div>
    </ContainerDetail>
  )
}

export default Detail