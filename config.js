const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144250768";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_51_03_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDY3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpNmxKMXZEZC9WUUtabC90dDJmYWdpNzlEZ09LbEkvaG81ajhhOHFraUI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRWG9XTlRyN1NSR0Z2ZmpCcEdIRWZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5NDFhMGZkLWQ4MDAtNGJjNS1hNjk3LTVkNjYyOTE1OGM0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxMixcbiAgICAgIDY3LFxuICAgICAgMTkzLFxuICAgICAgMTM3LFxuICAgICAgMTM1LFxuICAgICAgMTgxLFxuICAgICAgODUsXG4gICAgICA1NCxcbiAgICAgIDEzNixcbiAgICAgIDEzNixcbiAgICAgIDk2LFxuICAgICAgMTgwLFxuICAgICAgMTEyLFxuICAgICAgNjksXG4gICAgICAxODQsXG4gICAgICA0NyxcbiAgICAgIDE2MCxcbiAgICAgIDIwMixcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICA5MSxcbiAgICAgIDE1OCxcbiAgICAgIDI0MCxcbiAgICAgIDIxMixcbiAgICAgIDExMixcbiAgICAgIDk1LFxuICAgICAgMjQ5LFxuICAgICAgMjEzLFxuICAgICAgMTgyLFxuICAgICAgMTA2LFxuICAgICAgMTQxLFxuICAgICAgMjcsXG4gICAgICAxMDIsXG4gICAgICAxNjksXG4gICAgICAyNTAsXG4gICAgICAxNTAsXG4gICAgICAyMzUsXG4gICAgICA1OCxcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJNNEtWU1E2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ0MjUwNzY4OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE1ODM4OTA5MzE4OTc6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlNbktBQkVMMmhuNzhHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJESm9mQjBHTGVDdy9qVEpJcDgzcnVaNUczZWQvMWdvMVRQOXFCMDdFZFVnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFidHZRRVJsa3FpT3dENTdZbjVUZzRNdTU3cUFIQzExcVpVb2lXWjllUVpWV1pKdnRFUHdOZmZmSmh0dXU1QVlza21tL1ZyMTd2Ni9jYlcvcFBMS0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlcxS1N1ZkJiUFRzNzN1SGhZS3FjakM3ckVlQzlqMjl2elpMR0RkZzBUUW5US2tFVUozQVczMjBCUld2T3JnK1JnSzhQMFhNalBOSVpqb3FOSlF2L2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDQyNTA3Njg6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzMjQ1NTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRW5rXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVZEJOUU1MVUM5MjNjazRmSVVIcW81bERoOHB0MlBuQzk1QkpkQlp4eUVBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzNjAwNDY5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQzMjIxNTY1NDY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝖤𝗆𝗉𝗂𝗋𝖾 𝖳𝖾𝖼𝗁",
  packname: process.env.PACK_NAME || "Sticker By",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "𝖤𝗆𝗉𝗂𝗋𝖾 𝖳𝖾𝖼𝗁",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
