Router.configure({
    layoutTemplate: 'pluginLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
//  name: 'loading',
    data: function () {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/plugin', {
    name: 'moxtraPlugin',
    data: function () {
        /*return {
         type: req.param('type'),
         id: req.query.id || '',
         firstName: req.query.firstName || '',
         lastName: req.query.lastName || '',
         pictureUrl: req.query.pictureUrl || '',
         meetingKey: req.query.meetingKey || ''
         };*/
        return {
            type: 'meet',
            id: '',
            firstName: '毛豆1',
            lastName: '',
            pictureUrl: '',
            meetingKey: ''
        };
    }

});


Router.onBeforeAction('dataNotFound', {only: 'postPage'});
