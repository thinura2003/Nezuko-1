const YT = require('../../../lib/ytdl')
const { isUrl, fetchBuffer } = require('../../../lib/Function')
const fs=require("fs")
const yts= require("yt-search")
require ('../../../settings')
module.exports={
    name:"play",
    alias:["song"],
    usage:`${prefa}play <query>`,
    desc:"Plays the song...",
    category:"Media",
    start:async(client,m,{command,prefix,text,args})=>{
               
if(!text) return  client.sendMessage(m.from,{text:"What you want to play"},{quoted:m})
       client.sendMessage(m.from,{text:"\nDownloading your song*\n"},{quoted:m})
        let yts = require("yt-search")
         let search = await yts(text)
        let anu = search.videos[0]
const pl= await YT.mp3(anu.url)
if(!text) return client.sendMessage(m.from,{text:"\n*Uploading your song....*\n"})
client.sendMessage(m.chat, { audio: { url: pl.path }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: m })

    }
}
