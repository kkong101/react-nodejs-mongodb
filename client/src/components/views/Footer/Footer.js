import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', backgroundColor:'#444'
        }}>
           <p style={{color:'white'}}> Happy Coding !<Icon type="smile" /></p>
        </div>
    )
}

export default Footer
