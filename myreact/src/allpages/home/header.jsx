import React from 'react'
import { ContainerHeader } from '../../style/styleHome'
import Popup from 'reactjs-popup';


const Header = () => {
  return (
    <ContainerHeader>
    <div className='header'>
      <h1>Best food for your taste</h1>
      <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
      <div className='header_btndiv'>
        <button>Book A Table</button>
        <Popup
    trigger={<button className="button"> Explore Menu </button>}
    modal
    nested
    >
    {close => (
        <div className="modal">
        <button className="close" onClick={close}>
            &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
            <Popup
            trigger={<button className="button" role='button'> Trigger </button>}
            position="top center"
            nested
            >
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
            </Popup>
            <button
            className="button"
            onClick={() => {
                console.log('modal closed ');
                close();
            }}
            >
            close modal
            </button>
        </div>
        </div>
    )}
    </Popup>
      </div>
    </div>
    </ContainerHeader>
  )
}

export default Header