import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { ChatBubble } from './ChatBubble'
import { ChatInput } from './ChatInput'
import {ChatContactConfirmation} from './ChatContactConfirmation'
import ChatMessage from './ChatMessage'
import { ChatSlider } from './ChatSlider'
import { animateScroll } from 'react-scroll'


export * from './ChatCard'
export * from './ChatSlider'

import './styles.scss'

export class Chat extends Component {

  constructor(props) {
    super(props)

    this.onSend = this.onSend.bind(this);
  }

  componentDidUpdate() {

    window.requestAnimationFrame(() => {

      animateScroll.scrollToBottom();
    })
  }

  onSend(data) {

    this.props.onMessageSent(data);
  }

  render() {

    return (
      <div ref="chat" className="chat">
        <div className="conversation">

          {this.props.children}

          {this.props.messages.map(message => {

            if (message.text) {
              return <ChatBubble variant={message.from == this.props.user.id ? "me" : "other"} sent={message.sent}>{message.text}</ChatBubble>
            }

            // TODO: this should have a loop or someting
            if (message.attachments.length) {
              switch (message.attachments[0].contentType) {
                case 'thebotmakers.contact-form':
                  return <ChatContactConfirmation {...message.attachments[0].content} />
              }
            }
          })}
        </div>
        {/* <ChatInput onSend={this.onSend} /> */}
      </div>
    )
  }
}

Chat.propTypes = {
  user: React.PropTypes.shape({ id: React.PropTypes.string.isRequired, name: React.PropTypes.string.isRequired }).isRequired,
  messages: React.PropTypes.array.isRequired,
  onMessageSent: React.PropTypes.func.isRequired
}