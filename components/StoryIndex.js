import React from 'react';
import id from 'shortid';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

function LinkToStory({ linkName, displayName }) {
  return <View key={id.generate()}><Link to={`/story/${linkName}`}><Text>{`Go to story ${displayName}`}</Text></Link></View>;
}

export default function StoryIndex({ index }) {
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