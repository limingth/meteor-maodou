/**
 * Created by ruiyun_zhou on 1/31/15.
 */

Template.moxtraPlugin.rendered = function () {

    $('#meet-container').html('');

    maodou.meetSettings.width = "100%";
    maodou.meetSettings.height = "100%";

    maodou.eventHandler = function (event) {
        console.log("event: " + JSON.stringify(event));
        //parent.postMessage(event, 'http://localhost:3000');
        parent.postMessage(event, 'http://test.maodou.io');
        //parent.postMessage(event, 'http://maodou.io');
    };

    var model = this.data;

    if (this.data.type === 'meet') {
        maodou.startMeet({
            id: model.id,
            firstName: model.firstName,
            lastName: model.lastName,
            pictureUrl: model.pictureUrl
        });
    } else if (this.data.type === 'join') {
        maodou.joinMeet({
            id: model.id,
            firstName: model.firstName,
            lastName: model.lastName,
            pictureUrl: model.pictureUrl,
            meetingKey: model.meetingKey
        });
    }
};