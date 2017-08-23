import React from 'react';
import id from 'shortid';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NativeRouter as Router, Route, Link } from 'react-router-native';
import { getData, getIntroData } from './data/fake_database';
import TextDisplay from './components/TextDisplay';


function LinkToStory({ linkName, displayName }) {
  return <View key={id.generate()}><Link to={`/story/${linkName}`}><Text>{`Go to story ${displayName}`}</Text></Link></View>;
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
  for (const story in index) {
    if (index.hasOwnProperty(story)) {
      storyList.push(
          <LinkToStory key={id.generate()} linkName={index[story]['title from filename']} displayName={story} />
      )
    }
  }
  return <ScrollView>{storyList}</ScrollView>;
}

export function Stories({ stories }) {
  return (
    <View>
      <LinkToIndex/>
      {
        stories.map(story => (
            <Route
                key={id.generate()}
                exact path={`/story/${story['metadata']['title from filename']}`}
                render={props => <TextDisplay data={story} />}
            />
        ))
      }
    </View>
  );
}

export default class App extends React.Component {
  render() {
    const data = getData();
    return (
        <Router>
          <View>
            <Route render={props => <SayHi greeting="MARGIN"/>} />
            <Route exact path="/" render={props => <StoryIndex index={data['index']} />} />
            <Route path="/story" render={props => <Stories stories={data['stories']} />} />
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
