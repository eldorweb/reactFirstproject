import React from 'react'
import { ContainerBlog } from '../../style/styleHome'
import burger from '../../img/jpg/blog1.png'
import blog1 from '../../img/jpg/blog2.png'
import blog2 from '../../img/jpg/blog3.png'
import blog3 from '../../img/jpg/blog4.png'
import blog4 from '../../img/jpg/blog5.png'

const Blog = () => {
    return (
    <ContainerBlog >
        <div className='blog'>
            <div className='nav'>
                <h2>Our Blog & Articles</h2>
                <button>Read All Articles</button>
            </div>
            <div className='wrapper'>
                <div className='cart'>
                    <img src={burger}/>
                    <div>January 3, 2023</div>
                    <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                </div>
            <div className='wrapper2'>

            <div className='cart1'>
                    <img src={blog1}/>
                    <div className='cart1_w'>
                    <div>January 3, 2023</div>
                    <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                    </div>
                </div>

            <div className='cart1'>
                    <img src={blog2}/>
                    <div className='cart1_w'>
                    <div>January 3, 2023</div>
                    <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                    </div>
                </div>

            <div className='cart1'>
                    <img src={blog3}/>
                    <div className='cart1_w'>
                    <div>January 3, 2023</div>
                    <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                    </div>
                </div>

            <div className='cart1'>
                    <img src={blog4}/>
                    <div className='cart1_w'>
                    <div>January 3, 2023</div>
                    <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </ContainerBlog>
    )
}

export default Blog