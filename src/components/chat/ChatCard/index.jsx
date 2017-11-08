import React from 'react'
import Slider from 'react-slick'

import './styles.scss'

export class ChatCard extends React.Component {

    render() {
        let img = <img src={this.props.image} />
        let h5 = <h5 className="title">{this.props.title}</h5>
        let p = <p className="description">{this.props.description}</p>
        
        let wrapper = this.props.url ? <a href={this.props.url} className="image">{img}{h5}{p}</a> : <div className="image">{img}{h5}{p}</div>;
        return (
            <div {...this.props}>
                <div className="card" >
                    {wrapper}
                </div>
            </div>)
    }
}