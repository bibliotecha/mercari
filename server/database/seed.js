const items = [
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80',
    description: '服１',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: '服２',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1536992266094-82847e1fd431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: '服３',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1534337711732-1c9ae62389e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: '服４',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1502025080534-fa1384b6c04c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: '服５',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1507707113652-f8a32c05046d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: '服６',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: '服７',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1542318332-034f3136b62f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: '服８',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1559594323-ddf28daef0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=838&q=80',
    description: '服９',
  },
  {
    name: '服',
    url:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    description: '服１０',
  },
];

const seedItems = (db) => {
  for (let i = 0; i < items.length; i++) {
    db.query(
      `INSERT INTO items (name, url, description) VALUES (?, ?, ?)`,
      [items[i].name, items[i].url, items[i].description],
      (err, result) => {
        if (err) throw err;
      }
    );
  }
  console.log('done seeding');
};

module.exports = {
  seedItems,
};
