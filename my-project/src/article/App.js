import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Calendar from './Calendar'
import NewArticleForm from './NewArticleForm'
import NotFound from './NotFound'
import './calendar.css'
import {Route, NavLink, Switch} from 'react-router-dom'


class App extends Component {

    articleNew = (match, location) => {
        if(match){
            return location.pathname !== '/articles/new'
        }
    }

    render() {
        return(

                <div>
                    <ul>
                        <li><NavLink activeStyle = {{color: 'red'}} to={'/calendar'} >Calendar</NavLink></li>
                        <li><NavLink activeStyle = {{color: 'red'}} to={'/articles'} isActive={this.articleNew}>Articles</NavLink></li>
                        <li><NavLink activeStyle = {{color: 'red'}} to={'/articles/new'} >New Articles</NavLink></li>
                    </ul>
                    <div>
                        <UserForm />
                     <Switch>
                        <Route path='/calendar' component = { Calendar } exact/>
                        <Route path='/articles/new' component= { NewArticleForm }/>
                        <Route path='/articles' component = { ArticleList } />
                        <Route path='*' component = { NotFound }/>
                     </Switch>
                    </div>
                </div>

        )
    }
}

export default App