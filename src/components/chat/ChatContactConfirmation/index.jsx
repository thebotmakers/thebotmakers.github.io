import React from 'react'
import Slider from 'react-slick'

import './styles.scss'

export class ChatContactConfirmation extends React.Component {

    render() {

        return (
            <div {...this.props}>
                <div className="card confirmation" >

                    <table className="table table-bordered">
                        <tr>
                            <td><b>Name</b></td>
                            <td>{this.props.name}</td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>{this.props.email}</td>
                        </tr>
                        <tr>
                            <td><b>Message</b></td>
                            <td>{this.props.message}</td>
                        </tr>
                    </table>
                </div>
            </div>)
    }
}