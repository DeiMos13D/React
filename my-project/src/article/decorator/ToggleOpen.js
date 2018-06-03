import React, {Component as ReactComponent} from 'react'

function toggleOpen(OriginalComponent) {
    return class OpenedList extends ReactComponent {
        constructor(props) {
            super(props)

            this.state = {
                isOpen: false
            }
        }

        toggleOpen = () => {
            this.setState({isOpen: !this.state.isOpen})
        }

        render() {
            return(
                <OriginalComponent {...this.props} toggleOpen={this.toggleOpen} isOpen={this.state.isOpen}/>
            )
        }

    }
}

export default toggleOpen