import React, { Component } from 'react'
import { /*Router,*/ Route, NavLink, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import About from './About'
import Events from './Events'
import Products from './Products'
import ContactUs from './ContactUs'
import NotFound from '../article/NotFound'
import BangBang from './BangBang'
import history from '../history'

class MainMenu extends Component {
    bangBangOne = () => {
        return <h1>Bang Bang</h1>
    }

    bangBang = ({match}) => {
        console.log(match)
        return <BangBang id = { match.params.id } page = { match.params.page }/>
    }

    render () {
        const id = 'name'
        const page = 'gang'
        return (
            <ConnectedRouter history={history}>
                <div>
                    <ul style = {{fontSize: '30px'}}>
                        <li><NavLink activeStyle = {{ color: 'red' }} to = '/about'>[About]</NavLink></li>
                        <li><NavLink activeStyle = {{ color: 'red' }} to = '/events'>[Events]</NavLink></li>
                        <li><NavLink activeStyle = {{ color: 'red' }} to = '/products'>[Products]</NavLink></li>
                        <li><NavLink activeStyle = {{ color: 'red' }} to = '/contact'>[Contact Us]</NavLink></li>
                        <li><NavLink activeStyle = {{ color: 'red' }} to = '/bangbang'>[Bang Bang]</NavLink></li>
                        <li><NavLink to={`/bangbang/${id}/${page}`}>Param</NavLink></li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path = '/about' component = { About } />
                                <Redirect from = '/history' to = '/about/history'/>
                                <Redirect from = '/services' to = '/about/services'/>
                                <Redirect from = '/location' to = '/about/location'/>
                            <Route path = '/events' component = { Events }/>
                            <Route path = '/products' component = { Products }/>
                            <Route path = '/contact' component = { ContactUs }/>
                            <Route path = '/bangbang' render = {this.bangBangOne} exact/>
                            <Route path = '/bangbang/:id/:page' render = {this.bangBang}/>
                            <Route path = '*' component = { NotFound }/>
                        </Switch>
                    </div>
                </div>
            </ConnectedRouter>
        )
    }
}

export default MainMenu