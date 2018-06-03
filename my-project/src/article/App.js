import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import './calendar.css'
import { HashRouter, Route, Link } from 'react-router-dom'


class App extends Component {
    render() {
        return(
            <HashRouter>
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
            </HashRouter>
        )
    }
}

export default App