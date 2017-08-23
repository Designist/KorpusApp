import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import id from 'shortid';
import SentenceTable from './SentenceTable';
import TimedSentence from './TimedSentence';

export default function TextDisplay({ data }) {
  const output = [];
  const title = data["metadata"]["title"]["_default"];
  const sentences = data["sentences"];
  const tiers = data["metadata"]["tier IDs"];
  const timed = data['metadata']['timed'];

  output.push(<Text key={id.generate()} style={styles.bigred}>{title}</Text>);

  for (let i=0; i<sentences.length; i++) {
    // output.push(<Text key={id.generate()} style={styles.blue}>{sentences[i]["text"]}</Text>);
    if (timed) {
      output.push(<TimedSentence key={id.generate()} sentence={sentences[i]} tiers={tiers} />);
    } else {
      output.push(<SentenceTable key={id.generate()} sentence={sentences[i]} />);
    }
  }
  return <ScrollView>{output}</ScrollView>;
}

// FIXME duplicate with styles constant in App.js
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