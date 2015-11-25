var peer = new Peer({key: 'ytgklpf684u0udi'});

var connection;
peer.on('open',function(id){
   console.log('The ID of this client is ' + id);
   document.getElementById('peerIdDisplay').innerHTML = id;
});

