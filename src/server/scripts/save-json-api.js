import fs from 'node-fs';
import getDb from '../db/index.cjs';
const db = getDb();

fs.mkdir('./build/static/db', () => {
  for (let [key, value] of Object.entries(db)) {
    fs.writeFile(
      `./build/static/db/${key}.json`,
      JSON.stringify(value),
      (err) => {
        if (err) throw err;
      }
    );
  }
});
