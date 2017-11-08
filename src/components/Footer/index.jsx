import React from 'react'
import moment from 'moment'

import './styles.scss'

export class Footer extends React.Component {

    render() {

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="title">® 2017 - The Bot Makers </p>
                            <p className="love">Made inhouse with ♥ by us</p>
                            <p className="title">Let's connect online
                            <ul className="list-inline social">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/tbotmakers/" target="_blank"><i className="fa fa-facebook-square logo-medium" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/tbotmakers" target="_blank"><i className="fa fa-twitter-square logo-medium" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/company/the-bot-makers" target="_blank"><i className="fa fa-linkedin-square logo-medium" aria-hidden="true"></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.github.com/thebotmakers" target="_blank"><i className="fa fa-github-square logo-medium" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>);
    }
}