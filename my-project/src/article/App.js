import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import './calendar.css'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


class App extends Component {
    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to={'/calendar'}>Calendar</Link></li>
                        <li><Link to={'/articles'}>Articles</Link></li>
                    </ul>
                    <div>
                        <UserForm />
                        <Route path={'/calendar'} component = { Calendar } />
                        <Route path={'/articles'} component = { ArticleList } />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App