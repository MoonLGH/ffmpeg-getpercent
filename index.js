async function OnPercentInPercent(file){
    const { getVideoDurationInSeconds } = require('get-video-duration')
    let dur;
    getVideoDurationInSeconds('./inp.mp4').then((duration) => {
      dur = duration
    })
    
    const pathToFfmpeg = require("ffmpeg-static")
let ffmpeg = require("fluent-ffmpeg")
const { timemarkToSeconds } = require("fluent-ffmpeg/lib/utils")


 let perc
    ffmpeg(file)
    .on('progress',(progress)=>{
     perc =  ((timemarkToSeconds(progress.timemark) / dur) * 100).toFixed(2) + "%"
    })

    return perc
    }

module.exports =  OnPercentInPercent(file)