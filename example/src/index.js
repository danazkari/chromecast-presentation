import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  receiverApp: require('../assets/receiver.png'),
  senderApp: require('../assets/sender.png'),
  speaker: require("../assets/danazkari.jpg"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/logo.png"),
  markdown: require("../assets/markdown.png"),
  bg: require('../assets/bg.jpg')
};

preloader(images);

const theme = createTheme({
  text: "white",
  primary: "#3b3135",
  secondary: "#ff0370",
  accent: "#fdf200",
  band: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck bgColor="primary" transition={["fade"]} theme={theme} transitionDuration={500}>
        <Slide notes={
          [
            'Good evening everyone! welcome to howto make custom apps from chromecast'
          ].join('\n')
        }>
          <Image src={images.logo} />
          <Heading size={1} textColor="text">
            Making custom apps for Chromecast
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.speaker} width={240} style={{ borderRadius: '50%' }}/>
          <Heading size={2} textColor="text">
            Daniel Prado
          </Heading>
          <Heading size={2} textColor="accent">
            @danazkari
          </Heading>
        </Slide>
        <Slide bgImage={images.bg} notes={'3 key ingredients: sender, receiver, server.'}>
          <Heading size={2} textColor="band" bgColor="secondary">
            We're gonna learn how to chromecast!
          </Heading>
          <Appear>
            <Image src='http://www.reactiongifs.com/r/dsori.gif' />
          </Appear>
        </Slide>
        <Slide bgImage={images.bg} notes={'simple JS, show source code'}>
          <Heading size={2}  textColor="band" bgColor="secondary">The sender app</Heading>
          <Link target="_blank" href="https://gl-chromecast.herokuapp.com/">
            <Image src={images.senderApp}/>
          </Link>
        </Slide>
        <Slide bgImage={images.bg} notes={'2 receiver kinds: custom, styled media.'}>
          <Heading size={2} textColor="band" bgColor="secondary">
            The (custom) receiver app
          </Heading>
          <Link target='_blank' href='https://gl-chromecast.herokuapp.com/chromecast'>
            <Image width={600} src={images.receiverApp} />
          </Link>
        </Slide>
        <Slide notes={'server app, https'} bgImage={images.bg}>
          <Heading size={2} textColor="band" bgColor="secondary">The server app</Heading>
          <Appear>
            <Heading size={2}  textColor="band" bgColor="secondary">
              Needs SSL connection!
            </Heading>
          </Appear>
        </Slide>
        <Slide notes={'1. prod/staging env <br />2. Create Chromecast App <br />3. Import sender/receiver libs'}>
          <Heading size={2} textColor="text">What we need</Heading>
          <List textColor="text">
            <Appear>
              <ListItem>Get a chromecast and register it in the <Link textColor="accent" target="_blank" href="https://cast.google.com/publish">cast sdk console</Link></ListItem>
            </Appear>
            <Appear>
              <ListItem>Create a prod/staging env with a published URL</ListItem>
            </Appear>
            <Appear>
              <ListItem>Create a Cast App <Link textColor="accent" target="_blank" href="https://cast.google.com/publish">here!</Link></ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgImage={images.bg} notes={'Sender app, then receiver app, then server app, emhasis the need to communicate to the chromecast app '}>
          <Heading size={2} bgColor="primary" bgColor="band">Let's look at the code!</Heading>
        </Slide>
      </Deck>
    );
  }
}
