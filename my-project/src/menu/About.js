import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Company from './Company'
import History from './History'
import Services from './Services'
import Location from './Location'

class About extends Component {
    render () {
        return (
            <div>
                <ul>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = '/about' exact>-> Company</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = '/about/history'>-> History</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = '/about/services'>-> Services</NavLink></li>
                    <li><NavLink activeStyle = {{ color: 'red' }} to = '/about/location'>-> Location</NavLink></li>
                </ul>
                <div>
                    <Route path = '/about' component = { Company } exact/>
                    <Route path = '/about/history' component = { History }/>
                    <Route path = '/about/services' component = { Services }/>
                    <Route path = '/about/location' component = { Location }/>
                </div>
            </div>
        )
    }
}

export default About