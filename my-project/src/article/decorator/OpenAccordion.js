import React, {Component as ReactComponent} from 'react'

function accordion(OriginalComponent) {
    return class Accordion extends ReactComponent {
        constructor(props) {
            super(props)

            this.state = {
                isOpened: null
            }
        }

        toggleOpenOnly = (id) => {
            if(this.state.isOpened === id) {
                this.setState({isOpened: null})
            } else {
                this.setState({isOpened: id})
            }
        }

        render() {
            return(
                <OriginalComponent {...this.props} isOpened={this.state.isOpened} toggleOpenOnly={this.toggleOpenOnly}/>
            )
        }
    }
}

export default accordion