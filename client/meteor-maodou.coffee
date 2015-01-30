#Meteor.subscribe('posts');

if Meteor.isClient
  # counter starts at 0
  Session.setDefault "counter", 0
  console.log "Client running..."

if Meteor.isServer
  Meteor.startup ->
  # code to run on server at startup
    console.log "Server running..."
