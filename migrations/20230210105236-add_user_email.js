module.exports = {
  async up(db) {
    return await db.collection('users').updateMany(
      {'email': { $exists: false }},
      {
        $set: { 'email': '' }
      });
  },

  async down(db) {
    return await db.collection('users').updateMany(
      {'email': ''},
      {
        $unset: { 'email': '' }
      });
  }
};
