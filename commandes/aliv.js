"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "creator", reaction: "🤠", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*🤠* 👋 \n\n ' + " hellow friends my name is MR-ONLINE MD im a simple wastappbot created by *MR-ONLINE TECH* on 09/02/202405 on Sunday morning 2;30am and im o happy now and im here to help and iknow 1k languages on the word so be free and im pure single 😢 i have more to talk but keep using YESSER MD";
    let d = '                                                                            my handsome creator MR ONLINE TECH';
    let varmess = z + d;
    var mp4 ='https://files.catbox.moe/4ijbiv.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
