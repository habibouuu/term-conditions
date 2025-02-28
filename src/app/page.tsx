// project import
"use client"
import etro from 'etro'
import $ from 'jquery'
import outputCanvas from 'etro'
import MinimalLayout from 'layout/MinimalLayout';
import Landing from 'views/landing';
import {useState, useEffect} from 'react';
import util from 'api/app/backendapp/index'
import utils from 'api/videoeditting'
import useAudio from 'hooks/useAudio'; 
// ==============================|| HOME PAGE ||============================== //
import image from '../../public/assets/image/3.png'
import utilss from '../api/socialMethods/tiktok'
export default function HomePage() {

  const [sound, setSound] = useState<any>('')
  const [vids, setVids] = useState<any>([])
  const [text, setText] = useState<any>('')
  useEffect(()=>{
    (async ()=>{
      const a:any = await util.runscripts();
      console.log(a);
      
      if(a.narrator && a.script && typeof document !== 'undefined'){
        setSound(a.narrator)
        setVids(a.videos)
        setText(a.script)
        const canvas = document.querySelector('canvas')!
        canvas.width = 340
        canvas.height = 640
        var movie = new etro.Movie({ canvas: canvas })

        for(let i =0;i<a.videos.length;i++){

        
        var layer1 = new etro.layer.Video({
          startTime: 0+i*10,
          duration: 10,
          source: a.videos[i], // also accepts an `HTMLVideoElement`
          sourceX: 0, // default: 0
          sourceY: 0, // default: 0
          sourceWidth: 340, // default: null (full width)
          sourceHeight: 640, // default: null (full height)
          sourceStartTime: 0, // default: 0
          destX: 0, // default: 0
          destY: 0, // default: 0
          destWidth: 340, // default: null (full width)
          destHeight: 640, // default: null (full height)
          x: 0, // default: 0
          y: 0, // default: 0
          width: 340, // default: null (full width)
          height: 640, // default: null (full height)
          opacity: 1, // default: 1
          muted: false, // default: false
          volume: 1, // default: 1
          playbackRate: 1, // default: 1
        });
        movie.layers.push(layer1)
      }
        
let v=[]
let str=''
for(let i=0;i<a.script.length;i++){

  if(str.length==40){
    v.push(str)
    str=''
  }else{
    str+=a.script.charAt(i)
  }
}
// for(let i=0;i<v.length;i++){
  var laye = new etro.layer.Text({
    startTime: 0,
    duration: 110,
    text: 'Listen closely 🎧',
    x: 20, // default: 0
    y: 20, // default: 0
    width: 150, // default: null (full width)
    height: 32, // default: null (full height)
    opacity: 1, // default: 1
    background:etro.parseColor("rgba(216, 9, 9, 0.7)"),
    color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
    font: "16px sans-serif", // default: '10px sans-serif'
    textX: 25, // default: 0
    textY: 25, // default: 0
    textAlign: "start", // default: 'left'
    textBaseline: "ideographic", // default: 'alphabetic'
    textDirection: "ltr",
  });
  movie.layers.push(laye)
// }
 
const lay = new etro.layer.Audio({
  startTime: 0,
  duration: 110,
  source: a.narrator,
  sourceStartTime: 0, // default: 0
  muted: false, // default: false
  volume: 1, // default: 1
  playbackRate: 1, // default: 1
});
movie.layers.push(lay)
const la = new etro.layer.Audio({
  startTime: 0,
  duration: 110,
  source: a.bgMusic,
  sourceStartTime: 5, // default: 0
  muted: false, // default: false
  volume: 0.4, // default: 1
  playbackRate: 1, // default: 1
});
movie.layers.push(la)


     await movie.play().then(() => {
        console.log("Movie finished playing");
        

      });


      }

    })();
    
  },[]);
  console.log(sound)

  
  return (
<>
       <audio id='a1' src={sound} controls >
  <source src={sound} type='audio/mpeg'/>
  Your browser does not support the audio element.
</audio>
<canvas id='canva' className='canva'>
</canvas>
</>
   
  );
}
