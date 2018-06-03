import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import NewArticleForm from './NewArticleForm'
import './calendar.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


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
                     <Switch>
                        <Route path='/calendar' component = { Calendar } />
                        <Route path='/articles/new' component= { NewArticleForm }/>
                        <Route path='/articles' component = { ArticleList } />
                     </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App