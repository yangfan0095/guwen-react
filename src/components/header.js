import React, { Component } from 'react';
import '../assets/header.less';
const Header = ()=>{
    return(
        <div className="header">
            <div className="header-content">
                <span className="title">古文网</span>
                <span className="des">一个有情怀的网站，本站纯公益，拒绝任何广告</span>
            </div>    
        </div>
    )
}
export default Header;