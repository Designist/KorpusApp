import React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TimedSentence({ sentence, tiers }) {
  // I/P: sentence, a sentence
  // O/P: table of glossed Row components
  // Status: tested, working

  // Add the independent tier, i.e., the top row, to the list of rows. Note that
  const topRow = <Row data-tier={sentence['tier']} className="topRow" data={[sentence['text']]} />;

  const dependents = sentence['dependents']; // list of dependent tiers, flat structure
  let dependentRows = [];
  // Add each free-gloss tier to the row list:
  for (const { tier, values } of dependents) {
    const isFreeGloss = !tiers[tier]['subdivided'];
    if (isFreeGloss) {
      let row = [];
      for (const v of values) {
        row.push(v['value']);
      }
      dependentRows.push(row);
    }
  }

  return (
      <Table className="gloss">
        {topRow}
        <Rows data={dependentRows} />
      </Table>
  );
}