import React from 'react'
import moment from 'moment'

import './style.scss'

export class SlideBot extends React.Component {

    render() {

        return (
            <div {...this.props}>
                <div className="slide-bot" >
                    <div className="row">
                        <div className="demo">
                            <img src={`/images/${this.props.kind}.gif`} />
                        </div>
                        <div className="col-md description">

                            <p>
                                <a target="_blank" href={this.props.url}>
                                    <img src={`/images/${this.props.kind}.png`} />
                                </a>
                            </p>
                            <h4>{this.props.title}</h4>
                            <p>{this.props.description}</p>

                            <p>
                                <span className="fb-messengermessageus"
                                    messenger_app_id={this.props.appid}
                                    page_id={this.props.pageid}
                                    color="blue"
                                    size="xlarge">
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
