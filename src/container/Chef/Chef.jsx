import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="Content">
        <div className="app__chef-content_quote">
          
          <p className="p__opensans">At Chef's Word, we are committed to delivering culinary masterpieces that celebrate the art of food and create unforgettable moments for our valued guests.</p>
        </div>

      </div>

      
    </div>
  </div>
);

export default Chef;
