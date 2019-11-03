import React from 'react';
import { headerImageUrl, sidebarLinksOptions } from '../../../mock/data/data';
import styles from './MenuView.scss';
import Link from '../Link/Link';
import { Route } from 'react-router-dom';
import Sun from './../../assets/svg/sun.svg';
import Thunder from './../../assets/svg/thunderstorm.svg';
import Cloud from './../../assets/svg/cloudy.svg';
import Snow from './../../assets/svg/snow.svg';
import Rain from './../../assets/svg/rain.svg';

const MenuView = () => (
  <div className={styles.wrapper}>
    <div>
      <img src={headerImageUrl} className={styles.headerImage} alt='image'/>
    </div>
    <div className={styles.sidebar}>
      <Link options={sidebarLinksOptions}/>
    </div>
    <div className={styles.content}>
      <Route exact path='/' render={() => { return <div>Minsk +27 <Sun/> </div>; }} />
      <Route path='/sydney' render={() => { return <div>Sydney +36 <Thunder/> </div>; }} />
      <Route path='/kiev' render={() => { return <div>Kien +32 <Cloud/> </div>; }} />
      <Route path='/prague' render={() => { return <div>Prague +30 <Rain/>  </div>; }} />
      <Route path='/newyourk' render={() => { return <div>New Your +35 <Snow/> </div>; }} />
      <Route path='/riodejaneiro' render={() => { return <div>Rio De Janeiro +39 <Sun/> </div>; }} />
    </div>
  </div>
);

export default MenuView;
