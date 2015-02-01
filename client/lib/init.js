/**
 * Created by ruiyun_zhou on 14-11-26.
 */

Meteor.startup(function() {
    $.i18n.init({getAsync: false, resGetPath: '/locales/__lng__.json'});
});