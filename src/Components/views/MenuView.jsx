import React from 'react';
import { headerImageUrl, sidebarLinksOptions } from '../../../mock/data/data';
import styles from './MenuView.scss';
import Link from '../Link/Link';
import { Route } from 'react-router-dom';

const MenuView = () => (
  <div className={styles.wrapper}>
    <div>
      <img src={headerImageUrl} className={styles.headerImage} alt='image'/>
    </div>
    <div className={styles.sidebar}>
      <Link options={sidebarLinksOptions}/>
    </div>
    <div className={styles.content}>
      <Route exact path='/' render={() => { return <div>1</div>; }} />
      <Route path='/sydney' render={() => { return <div>2</div>; }} />
      <Route path='/kiev' render={() => { return <div>3</div>; }} />
      <Route path='/prague' render={() => { return <div>4</div>; }} />
      <Route path='/newyourk' render={() => { return <div>5</div>; }} />
      <Route path='/riodejaneiro' render={() => { return <div>6</div>; }} />
    </div>
  </div>
);

export default MenuView;
