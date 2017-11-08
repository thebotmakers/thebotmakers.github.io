import React from 'react'
import Slider from 'react-slick'
import { ChatCard } from '../ChatCard'

import './styles.scss'

export class ChatSlider extends React.Component {

    constructor(props) {
        super(props)

        const defaults = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        this.settings = Object.assign(defaults, props.settings)
    }

    render() {

        return (
            <div className="chat-slider">
                <Slider {...this.settings}>

                    {this.props.children}

                    {this.props.items.map(item => {

                        if (React.isValidElement(item)) {
                            return item;
                        }

                        return <ChatCard {...item} />
                    })}
                </Slider>
            </div>)
    }
}