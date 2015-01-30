if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: 'Hands on meteor',
    url: 'https://github.com/limingth/hands-on-meteor'
  });

  Posts.insert({
    title: 'My maodou chat',
    url: 'http://maodou-chat.meteor.com'
  });
}
