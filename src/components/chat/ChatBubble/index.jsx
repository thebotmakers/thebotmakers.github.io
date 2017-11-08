import React from 'react'
import moment from 'moment'

import './styles.scss'

export class ChatBubble extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="bubble-wrap">
                <div className={`bubble ${this.props.variant} ${this.props.sent === false ? '' : 'sent'}`}>{this.props.children}</div>
            </div>
        );
    }
}

ChatBubble.propTypes = {
    variant: React.PropTypes.string.isRequired,
    sent: React.PropTypes.bool.isRequired,
}