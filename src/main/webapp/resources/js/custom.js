var videlen = $('.video-play').length;
        for(var i=1;i<=videlen;i++){            
            var b = 'example-video-';            
           var j = b.concat(i);             
           var player = videojs(j);
           player.paused();         
        }