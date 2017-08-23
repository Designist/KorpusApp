import React from 'react';
import id from 'shortid';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
import { getData, getIntroData } from './data/fake_database';
import TextDisplay from './components/TextDisplay';


function DummyIndex() {
  return <View>
    <LinkToStory name="Intro" />
    <LinkToStory name="000" />
  </View>;
}

function LinkToStory({ name }) {
  return <View key={id.generate()}><Link to={`/story/${name}`}><Text>{`Go to story ${name}`}</Text></Link></View>;
}

function LinkToIndex() {
  return <Link to={`/`}><Text>Go to index</Text></Link>;
}

// a placeholder component used only for debugging
function SayHi({ greeting }) {
  return <Text>{greeting}</Text>;
}

export function StoryIndex({ index }) {
  let storyList = [];
  storyList.push(
      // <View key={id.generate()}>
        <Link to={`/story/Intro`}>Intro</Link>
      // </View>
  );
  for (const story in index) {
    if (index.hasOwnProperty(story)) {
      // storyList.push(
      //     <View key={id.generate()}>
      //       <Text>hiiiii</Text>
      //     </View>
      // );

      // storyList.push(
      //   <View key={id.generate()}>
      //     <Link to={`/story/${index[story]['title from filename']}`}>{story}</Link>
      //   </View>
      // )
    }
  }
  return <ScrollView>{storyList}</ScrollView>;
  // return <Text>{String(Object.keys(index))}</Text>; // seems correct ("Intro.eaf,103.xml,001.xml,...test.eaf")
}

export default class App extends React.Component {
  render() {
    const data = getData();
    return (
        <Router>
          <View>
            <Route render={props => <SayHi greeting="MARGIN"/>} />
            <Route exact path="/" render={props => <StoryIndex index={data['index']} />} />
            <Route path="/story" component={LinkToIndex} />
            <Route path="/story/Intro" render={props => <TextDisplay data={getIntroData()} />} />
            <Route path="/story/000" render={props => <TextDisplay data={data['stories'][0]} />} />
          </View>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  row: { height: 30 },
  singleHead: { width: 80, height: 30, backgroundColor: '#c8e1ff' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  text: { marginRight: 6, textAlign:'right' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    color: 'blue',
  },
  red: {
    color: 'red',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24
  }
});
