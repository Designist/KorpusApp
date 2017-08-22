import React from 'react';
import { Table, Row, Rows } from 'react-native-table-component';

export default function SentenceTable({ sentence }) {
  // I/P: sentence, a sentence
  // O/P: table of glossed Row components
  // Status: tested, working

  // Add the independent tier, i.e., the top row, to the list of rows. Note that
  const topRow = <Row data-tier={sentence['tier']} className="topRow" data={[sentence['text']]} />;

  const dependents = sentence['dependents']; // list of dependent tiers, flat structure
  let dependentRows = [];
  // Add each dependent tier to the row list:
  for (const {values} of dependents) {
    let row = [];
    for (const v of values) {
      row.push(v['value']);
    }
    dependentRows.push(row);
  }

  return (
      <Table className="gloss">
        {topRow}
        <Rows data={dependentRows} />
      </Table>
  );
}