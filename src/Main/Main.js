import React from 'react'
import LogoStuff from './LogoStuff'
import ThreePerks from './ThreePerks'

import axios from 'axios'
import {getURL, getUsername, getToken} from '../utils/index'

const Main = () => {

    return(
        <div className="text-center container container-fluid" style={{margin: '24px auto'}}>
            <br/>
            <LogoStuff/>
            <br/>
            <ThreePerks/>
        </div>
    )
}

export default Main;