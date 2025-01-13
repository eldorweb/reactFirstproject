import React from 'react'
import { ContainerDetail } from '../style/detailStyle'
import meal from '../img/menupng/menu1.png'
import meal1 from '../img/menupng/menu2.png'

const Detail = () => {
  return (
    <ContainerDetail>
      <div className='detail'>
        <h2>
        The secret tips & tricks to prepare a perfect burger & pizza for our customers
        </h2>
        <img src={meal} className='meal'/>
        <div className='wrapper'>
        <div className='subtitle'>
        What do you need to prepare a home-made burger?
        </div>
        <p className='text'>
        Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
        </p>
        <ol className='ul'>
          <li><b>Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
          <li><b>Seasoning:</b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
          <li><b>Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
          <li><b>Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
          <li><b>Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>
        <div className='subtitle'>
        What are the right ingredients to make it delicious?
        </div>
        <p className='text'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p>
        <ol className='ul'>
          <li><b>Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
          <li><b>Seasoning:</b> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
          <li><b>Don’t Overwork the Meat:</b> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
          <li><b>Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
          <li><b>Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
        </ol>
        </div>
        <img src={meal1} className='meal'/>
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