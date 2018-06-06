// import PlayList from './PlayList'
import App from './article/App'
import React, {Component, Fragment} from 'react'
import MainMenu from './menu/MainMenu'

class AllApp extends Component{
    render() {
        return(
            <Fragment>
                <App/>
                <MainMenu/>
                {/*<PlayList/>*/}
            </Fragment>
        )
    }
}

export default AllApp




