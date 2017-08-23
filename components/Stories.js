import React from 'react';
import id from 'shortid';
import { Text, View, ScrollView } from 'react-native';
import { Route, Link } from 'react-router-native';
import TextDisplay from './TextDisplay';

function LinkToIndex() {
  return <Link to={`/`}><Text>Go to index</Text></Link>;
}

export default function Stories({ stories }) {
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

