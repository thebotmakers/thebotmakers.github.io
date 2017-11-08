import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
// import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { ChatBubble } from '../components/chat/ChatBubble'
import { ChatButton } from '../components/chat/ChatButton'
import { Section } from '../components/layout/section'
import { SlideBot } from '../components/SlideBot'
import { ChatSlider } from '../components/chat/ChatSlider'
import { Chat, ChatCard } from '../components/chat'
import ChatMessage from '../components/chat/ChatMessage'
import { Footer } from '../components/Footer'
import update from 'immutability-helper';
import { DirectLine } from 'botframework-directlinejs';
import { ChatCardMap } from '../components/chat/ChatCardMap'
import { ChatContactConfirmation } from '../components/chat/ChatContactConfirmation'
import { Header } from '../components/Header'

export const data = {
  "how": {
    "title": "How will we achieve it?",
    "subtitle": "We can help you in many ways:",
    "modules": [
      {
        "title": "Chatbots Development",
        "description": "We use the latest techonologies, and don't try to reinvent the wheel. Our bots are made on the shoulder of giants, benefiting from tech from Microsoft, IBM, etc.",
        "image": "/images/development.png"
      },
      {
        "title": "Chatbots Consultancy",
        "description": "We are always on top of this ever changing technology. Be it Facebook, WhatsApp, Skype, etc. We know the ins and outs of every platform and can help you take the right decisions.",
        "image": "/images/consultancy.png"
      },
      {
        "title": "Chatbots Design",
        "description": "We have experience with bots used by thousands of users, and one thing is clear: you'll never get your bot right in the first try.",
        "image": "/images/design.png"
      }
    ]
  },
  "ourbots": {
    "bot_says": "not sure how would this work for you?",
    "title": "Some of our bots",
    "subtitle": "Because an example is worth a thousand words",
    "list": [
      {
        "kind": "horoscobot",
        "title": "Horoscobot",
        "subtitle": "Spanish and English",
        "description": "Patricia is 41 years old, she keeps her life very organized and is always careful when facing a new day. But she is carefree since she already talked to our bot and asked it to keep her informed every morning what the stars have planned for her.",
        "url": "https://www.facebook.com/horoscobot",
        "active": true,
        "appid": "977746502351381",
        "pageid": "299203353787456"
      },
      {
        "kind": "birrabot",
        "title": "Birrabot",
        "subtitle": "Spanish",
        "description": "Javier is 25 and is a craft beer fanatic. He loves to find new places and new brands. Thanks to Birrabot he can know where are the closest craft beer bars from his location.",
        "url": "https://www.facebook.com/birrabot",
        "active": false,
        "appid": "1310075219013000",
        "pageid": "208818316231855"
      },
      {
        "kind": "bondibot",
        "title": "Bondibot",
        "subtitle": "Spanish",
        "description": "Fernando is waiting at the bus stop and needs to get to school ASAP. Thanks to Bondibot he knows when the bus will arrive.",
        "url": "https://www.facebook.com/bondibot",
        "message_us": "https://www.messenger.com/t/Bondibot",
        "active": false,
        "appid": "1767731926810832",
        "pageid": "157440101392050"
      }
    ]
  },
  "team": [
    {
      "name": "Cesar Varela",
      "url": "http://cesarvarela.com",
      "img": "/images/founders/cesar.jpg",
      "fields": [
        {
          "name": "Sales"
        },
        {
          "name": "Marketing"
        },
        {
          "name": "UX&UI"
        }
      ],
      "catchphrase": "Products built with love is what makes great products"
    },
    {
      "name": "Ing. Clara Youdale",
      "url": "https://www.linkedin.com/in/clarayoudale/",
      "img": "/images/founders/clara.jpg",
      "fields": [
        {
          "name": "Language"
        },
        {
          "name": "Development"
        }
      ],
      "catchphrase": "Always keep an open mind when facing new challenges"
    },
    {
      "name": "Ing. Pablo Costa",
      "url": "https://uy.linkedin.com/in/pablo-costa",
      "img": "/images/founders/pablo.jpg",
      "fields": [
        {
          "name": "Architecture"
        },
        {
          "name": "Development"
        }
      ],
      "catchphrase": "Well executed ideas are the way to success"
    },
    {
      "name": "Osvaldo Colina",
      "url": "https://uy.linkedin.com/in/osvaldo-colina-4b9bb131",
      "img": "/images/founders/osvaldo.jpg",
      "fields": [
        {
          "name": "QA"
        },
        {
          "name": "Development"
        }
      ],
      "catchphrase": "Simplicity is part of Efficiency"
    }
  ],
  "integrations": {
    "bot_says": "and the best part of it.. this is available now!",
    "title": "Be where people are",
    "subtitle": "Our bots can be integrated with all the known platforms",
    "examples": [
      {
        "title": "Facebook Messenger",
        "description": "800 million monthly active users (as of 2015)",
        "img": "/images/integrations/messenger.png"
      },
      {
        "title": "WhatsApp",
        "description": "1 billion monthly active users (as of 2015)",
        "img": "/images/integrations/whatsapp.png"
      },
      {
        "title": "Skype",
        "description": "300 million registered users",
        "img": "/images/integrations/skype.png"
      },
      {
        "title": "Slack",
        "description": "3 million DAU",
        "img": "/images/integrations/slack.png"
      },
      {
        "title": "Custom web integration",
        "description": "We can integrate a bot with your website, and make the bot available to all visitors!",
        "img": "/images/integrations/internet.png"
      },
      {
        "title": "Custom app integration",
        "description": "We can integrate a bot with your mobile app, while keeping your users using the app!",
        "img": "/images/integrations/app.png"
      }
    ],
    "others": "Talk to us if the integration you need isn't listed here, we are constanlty adding new ones, and can develop a custom one for you.",
    "side_heading": "People spend more time on messaging apps on their smartphone than any other app.",
    "side_description": "Almost 40% millenials prefer to use instant messaging to communicate with brands, compared to 19% of the previous generation"
  }
}



class BlogIndex extends React.Component {

  constructor() {

    super();

    this.state = {
      messages: [],
      user: {
        id: 'user',
        name: 'user'
      }
    }
  }

  componentDidMount() {

    this.directLine = new DirectLine({
      secret: 'y3254-14TgQ.cwA.7aU.bB4PQHSE_wYBdKf6ddMqBdWQVCb0ZOOUeMFD3ywDshE'
    });

    this.directLine.activity$
      .filter(activity => activity.type === 'message')
      .subscribe(message => {

        if (message.from.id != this.state.user.id) {

          this.setState({ messages: this.state.messages.concat([new ChatMessage({ from: message.from.id, id: message.id, text: message.text, sent: true, attachments: message.attachments })]) });
        }
      });
  }

  onMessageSent = (data) => {

    const message = new ChatMessage({ from: this.state.user.id, id: Date.now().toString(), text: data.value, sent: false });

    this.setState({ messages: this.state.messages.concat([message]) });

    // TODO: this doens't work because of a bug in chrome debugger
    const self = this;

    this.directLine.postActivity({
      from: { id: this.state.user.id, name: this.state.user.name },
      type: 'message',
      text: data.value
    }).subscribe(
      id => {

        const index = self.state.messages.findIndex(m => m.id == message.id);
        const messages = update(self.state.messages, { [index]: { id: { $set: id }, sent: { $set: true } } });

        self.setState({ messages });
      },
      error => {

        console.log("Error posting activity", error)
      });
  }

  render() {

    return (
      <div>
        <Header title="Welcome!" blog={true} aboutus={true}></Header>

        <Section id="chat">
          <Chat
            messages={this.state.messages}
            user={this.state.user}
            onMessageSent={this.onMessageSent}
          >
            <ChatBubble variant="other">We specialize in chatbot development</ChatBubble>
            <ChatBubble variant="other">And we want to make your first bot</ChatBubble>

            <ChatBubble variant="other">🙂</ChatBubble>

            <ChatBubble variant="other">This is how we can help you:</ChatBubble>

            <ChatSlider items={[]}
              settings={{
                infinite: false,
                arrows: true,
                responsive:
                [
                  {
                    breakpoint: 99999, settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      dots: false
                    }
                  }, {
                    breakpoint: 990,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    }
                  }, {
                    breakpoint: 530,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }]
              }}
            >
              {data.how.modules.map(item => {

                return <ChatCard {...item} />
              })}

            </ChatSlider>


            <ChatBubble variant="other">Check out some of our bots!</ChatBubble>

            <ChatSlider items={[]} settings={{ infinite: false }}>
              <SlideBot {...data.ourbots.list[0]}></SlideBot>
              <SlideBot {...data.ourbots.list[1]}></SlideBot>
              <SlideBot {...data.ourbots.list[2]}></SlideBot>
            </ChatSlider>

            <ChatBubble variant="other">Our office</ChatBubble>

            <ChatCardMap
              apiKey="AIzaSyCkfPpmSJ5vjbCuxKyGaEVK6kJn4zdLv7g"
              markers={[{
                position: {
                  lat: -34.8792199,
                  lng: -56.0801284,
                },
                key: `Montevideo`,
                defaultAnimation: 2,
              }]}
              center={{ lat: -34.8792199, lng: -56.0801284 }}
              zoom={12}
              title="Av Italia, 6201 Oficina 20"
              description="Los Naranjos - LATU - Montevideo, Uruguay"
            />

            <ChatBubble variant="other">A little bit about us...</ChatBubble>

            <ChatSlider items={[]}
              settings={{
                infinite: false,
                arrows: true,
                responsive:
                [
                  {
                    breakpoint: 9999999, settings: {
                      slidesToShow: 4,
                      slidesToScroll: 4,
                      dots: false
                    }
                  }, {
                    breakpoint: 1200, settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                  }, {
                    breakpoint: 990,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    }
                  }, {
                    breakpoint: 530,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }]
              }}>
              {data.team.map(founder => {
                const props = { title: founder.name, description: founder.catchphrase, image: founder.img, url: founder.url }
                return <ChatCard {...props} />
              })}
            </ChatSlider>
            {/* <ChatButton text="Know more about us!" url="/aboutus/"></ChatButton> */}
            <ChatBubble variant="other">Contact us!</ChatBubble>
            <ChatBubble variant="other">info@thetbotmakers.com</ChatBubble>
            {/* <ChatBubble variant="other">What's your name?</ChatBubble> */}
          </Chat>
        </Section>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
