import etro from 'etro'
import outputCanvas from 'etro'
import $ from 'jquery'
async function videoEdit(obj){
  // obj.narrator,  obj.script, obj.videos,obj.bgmusic

var movie = new etro.Movie({ canvas: $('.canva') })
var layer 
for(let i=0;i<10;i++){
    layer = new etro.layer.Video({ startTime: i*10, source: obj.videos[i] })  // the layer starts at 0s
    movie.addLayer(layer)
}
 movie.play().then(() => {
        console.log("Movie finished playing");
      });

// movie.record({ frameRate: 24 })  // or just `play` if you don't need to save it
//     .then(blob => console.log(blob))

    //effect

    // var layer = new etro.layer.Video({ startTime: 0, source: videoElement })
    // .addEffect(new etro.effect.Brightness({ brightness: +100 }))
    // movie.play().then(() => {
    //     console.log("Movie finished playing");
    //   });

    //   movie
    //   .stream({
    //     frameRate: 30,
    //     onStart: (stream) => {
    //       console.log(`Streaming ${stream.getTracks().length} tracks`);
    //     },
    //   })
    //   .then(() => {
    //     console.log("Stream reached the end or was interrupted");
    //   });


    //   movie
    //   .record({
    //     frameRate: 30,
    //   })
    //   .then((blob) => {
    //     console.log(`Recorded ${blob.size} bytes`);
    //   });

    }

export default {
  videoEdit
}