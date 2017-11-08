import React from 'react'
import moment from 'moment'
import { ChatBubble } from '../../components/chat/ChatBubble'

import './styles.scss'

export class Header extends React.Component {

    render() {

        return (
            <header>
                <div className="container navigation">
                    <div className="row">
                        <div className="col-sm-6">
                            <a href="/"><h1 className="text-muted">The bot makers</h1></a>
                        </div>
                        {/* <div className="col-sm-6">
                            <ul className="links">
                                {this.props.blog &&
                                    <li>
                                        <a className="page-scroll" href="/blog/">Blog</a>
                                    </li>
                                }
                                {this.props.aboutus &&
                                    <li>
                                        <a href="/aboutus/">About us</a>
                                    </li>
                                }
                                <li>
                                    <a className="btn btn-primary text-uppercase btn-md page-scroll" href="/">Contact us</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="row blog-header">
                        <div className="col">
                            <ChatBubble variant="other">{this.props.title}</ChatBubble>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}