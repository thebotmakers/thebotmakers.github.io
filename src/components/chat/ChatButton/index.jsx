import React from 'react'
import Slider from 'react-slick'

import './styles.scss'

export class ChatButton extends React.Component {

    render() {

        return (
            <div>

                <a href={this.props.url} target="_blank">
                    <input type="button" className="btn btn-primary chat-button" value={this.props.text} />
                </a>

            </div>
        )
    }
}