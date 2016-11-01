
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Ms. Mittens', story: "My name is Mittens, I am married to Mr. FluffyKins and we have a beautiful son named Paul", image: "http://1000uglypeople.com/wp-content/uploads/Ugly-Cats-40.jpeg"}),
        knex('cats').insert({id: 2, name: 'Mr. Fluffykins', story: 'I am a stay at home dad and look after Paul, who is at a very difficult age', image: "http://all-that-is-interesting.com/wordpress/wp-content/uploads/2012/08/ugly-cat-sphynx-2.jpg"}),
        knex('cats').insert({id: 3, name: 'Paul', story:"Hi, I'm Paul", image: "http://cdn.acidcow.com/pics/20100607/ugly_cats_24.jpg"})
      ]);
    });
};
