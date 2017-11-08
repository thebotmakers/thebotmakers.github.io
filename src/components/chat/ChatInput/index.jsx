import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Textarea from 'react-textarea-autosize'

import './styles.scss'

export class ChatInput extends Component {

  constructor(props) {

    super(props);
    this.state = { value: '', show: false };
    this.showInput = this.showInput.bind(this);
  }

  send() {
    let value = this.state.value
    if (value.replace(/(^[ \t]*\n)/gm, "") != "") {

      if (this.state.value != '') {
        this.props.onSend(this.state);

        this.setState({ value: "" });
        this.refs.input.value = "";
      }
    }
  }

  onSendClick = (e) => {

    this.refs.input.focus();
    this.send();
  }

  onKeyDown = (e) => {
    if (e.keyCode == 13 && !e.shiftKey && !e.ctrlKey) {
      this.send();
    }
  }

  onChange = (e) => {

    this.setState({ value: e.target.value });
  }

  showInput() {
    if ((window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight)
      this.setState({ show: true })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.showInput);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.showInput);
  }

  render() {
    return (
      <div className={`chat-input ${this.state.show ? 'fixed' : ''}`}>
        <div className="container">
          <Textarea ref="input" placeholder="Type your message..." value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown} style={{ resize: "none", overflow: "hidden" }}></Textarea>

          <span className={`send fa-stack fa-2x ${this.state.value !== '' ? 'enabled' : ''}`} onClick={this.onSendClick}>
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-paper-plane fa-stack-1x fa-inverse"></i>
          </span>
        </div>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col copy">
                <p>Made inhouse with ♥ by us </p>
              </div>
              <div className="col copy text-right">
                <p>® 2017 - The Bot Makers </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

ChatInput.propTypes = {
  onSend: React.PropTypes.func.isRequired
}
