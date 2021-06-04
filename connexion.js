const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

const datas = require('./myOutputFile.json');

datas.map((data, key) => {
  client.create(
    {
      index: 'groupe_2',
      id: key,
      body: data,
    },
    (err, result) => {
      err ? console.log(err) : console.log(result);
    }
  );
});
