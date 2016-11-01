
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Ms. Mittens', story: "My name is Mittens, I am married to Mr. FluffyKins and we have a beautiful son named Paul", image: "http://1000uglypeople.com/wp-content/uploads/Ugly-Cats-40.jpeg"}),
        knex('cats').insert({id: 2, name: 'Mr. Fluffykins', story: 'I am a stay at home dad and look after Paul, who is at a very difficult age', image: "http://all-that-is-interesting.com/wordpress/wp-content/uploads/2012/08/ugly-cat-sphynx-2.jpg"}),
        knex('cats').insert({id: 3, name: 'Paul', story:"Hi, I'm Paul", image: "http://cdn.acidcow.com/pics/20100607/ugly_cats_24.jpg"}),
        knex('cats').insert({id: 10, name: 'Master Poodle', story:"World War II reenactment enthusiast by day, rapper by night", image: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg"}),
        knex('cats').insert({id: 5, name: 'Meowth', story:"Prepare for trouble...", image: "https://supple.com.au/temp/pokemon/948297-meowth.jpg"}),
        knex('cats').insert({id: 100, name: 'Garfield', story:"Love lasagna, hate mondays!", image: "http://orig08.deviantart.net/1e7b/f/2010/226/a/0/garfield_wallpaper_by_capt2001.jpg"})
      ]);
    });
};
