// import PlayList from './PlayList'
import App from './article/App'
import React, {Component, Fragment} from 'react'
import MainMenu from './menu/MainMenu'
import history from './history'
import { ConnectedRouter } from 'react-router-redux'
import PropTypes from 'prop-types'

class AllApp extends Component{
    static propTypes = {

    }
//**************************Add in context // ../article/Article.js \\
    static childContextTypes = {
        user: PropTypes.object
    }

    getChildContext() {
        return {
            user: {
                name: 'David',
                age: 24,
                city: 'Charentsavan'
            }
        }
    }
//****************************************
    render() {
        return(
            <Fragment>
                <ConnectedRouter history={history}>
                    <div>
                        <App/>
                        <MainMenu/>
                        {/*<PlayList/>*/}
                    </div>
                </ConnectedRouter>
            </Fragment>
        )
    }
}

export default AllApp




