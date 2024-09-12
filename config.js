//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJwVklpNnE2aWRpMy96VDFEa2J5R0dCMGtONTEzb1ljdjVLN04vRHNVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVQUkUra3h3dFdhWFBlQUtwOTZ3VzZ5OXh4VTYzemgwQjdvNjFsTFBGWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQTQ3aHNWT1BMMEtsV3NUNVFCNTNITEs2MDRkeDhjVk9BSytUUzNJdjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSnlhZ0wvaCtMMDh2Rm9TQW5hbVZrVUg5bFVEL2EwdHBwUk0vNG45dFRzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGbm8zdFpCc2p2SURJKytiRFozUklZTWprak0wdS9DeU51VjFJbEREbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LSDcxWTVUWnFIMTB2NEY5Y21OeG5oM0lEbzZ6N3BZQWpKV090VWk1aFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NjaGsrai9HdnlBWElIVjRGQjBCSTdMSlBJaTM2RGFkc0hWQVZTTDVVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUliSUZ4WnRmQUtkeUwvK28vMjRGa3owNWpvVnRqQ29uMU5iYnZDeHFUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3WFVzMUd1VUNpbnFwVXhlR25mc2xDQzBPOG1GS0RjWStCZG9wTS84RzcvOWhJc3o4bEFuVnBlUjNmZGZkRjZ1SHBOOGFXaXlURHNWcWJVYTVDeWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJzdkZyTXgwMW0vVTVGcDk0OUJXZ0F2Y0l0OE9QSG1rOEdwR0x4ZDJ6bHBRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0MS1HazZGS1FyZVdJUFV1anBSdW1nIiwicGhvbmVJZCI6Ijc0YWI3MWY5LThkNTYtNDM2MC04MmZlLTczNGQ0ZmFjZTZlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJubU0xUkNBTEpYb1NYZi9KY0ZKZ0UwYUNCWDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1dHL0pQNWZYUzZVV1libHlVMEJiL3BoaVVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI4MkhEVkdZIiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSGFraXNvbG9zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORG50KzRHRUkybmc3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvSU0xRzdEazUyRXI3ek5Jek9GOW1wY2pIRERsY2ZLWloza0JYanVteFRjPSIsImFjY291bnRTaWduYXR1cmUiOiJ3OFZlUGJEVk95Q3pLK0k4cjhTWjJ1eWxPV1BKTTZhNk1PV0NXZmRCTXFncHFsUVdMNDBKMmtlMmVMQXR3bHVNcWpBZXNSUnRLa0FoTUg0THlqVXREZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMkJPaUdWZG0vcHkvdThVZS9KK0dwdkhUVytTOEs1WXpVN1YrSTNTekh4VXZkVWFQODBPT2x3ZHNITGdTTEcwM1NpejhFVVlyRjhoWGU2MStxVTAvaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEyMTcxMDc4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUNETlJ1dzVPZGhLKzh6U016aGZacVhJeHd3NVhIeW1XZDVBVjQ3cHNVMyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjAxMDI2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKS1YifQeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUY5OVNrY3RzLzUrUk9JWUdJWGxnRzU5ZnlXQUk0ZDZWV0V3UHgyTHkxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3VzTzA0TTQ1aE9KVVVydmhJYmNlMFY4NnZKS1FZZ1gwNlJXa0RhejhFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT3phVjdoUmdoTXFlMTVpL0xmNFJzOVlHY2lsVWFhTXE5RWV5K21qQUcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0aXBOK0lDRkozT2ZTRzdHbnhPL2h3TzM4b2tiR3ZDbXVSRVVOdnNPSUdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKd2xWWTFQN3MrdzdUYmlTbWk4ZGx1RTJzb2V1bmVwaS9NYVBJVjV6V2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpYOEdTNDFER1RKSTk1YXQzYWJMaE9NczdTRE5MT3VCNVRPb1dPSExoSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUp2UmtFWXBWam5ldnczVHpDZlJSMk9VOEtTMVEyeDFZRWM0NnFTM2cxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGdkZytHcnFuQjcyS1MzS1pJVElaQytVVWJMRFdTbDlQWG4vU1gvUjhVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOZDQ5NHA1cTdQMkF1YzRuL0VRd2tsOUI1YjV1ODVDYXdVcGhBd2FFU1ZBckNvTm5YZENNT3JlODB2bndLTzUvN05DWTg2K2ZPMEsrOHpjZEUzakNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiI5aUJZSGpsR2J2NUxZbHB3OE1qd2Zuc0pmRE5rUGs2OVJ3TmlIWFBKZnZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6MFFOcjBNaVFQS1gzNXdFb2xvV3R3IiwicGhvbmVJZCI6ImNiNDA0Njk4LTUwZWEtNGVmNC05MzUyLTRhNjdlMGNiNzAyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxZXlnN001Nkc2VGJlckgvZThLVUVkN2Y1ejQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDcycWxRYmZaV1Voc1UyT3pRNkxnTTY0ZUhZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkE2Q0FEREVUIiwibWUiOnsiaWQiOiIyMzQ4MTA1Njc2MjIwOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQDFpbnZlc3RvciBnb2t1INmK2YbZgdi5INmG2LHYqtio2KrgvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04razhhUUVFSURqaTdjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVZejVaVnM5Wk9NYWZqRUxEdjBXT3lLWTRrY0tFY2dZL25GM0JXeFVIa0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8ybnJ0c0JWQUhERElLVm9qN2lwS3d4SUVsb09FM2ZES0NzTmt3RlRkYzZFa3pWd3NkV1B2YUFEa1c2OW5HbWZUTWI1emgzaGgydUtkVzlqcnh2bUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVQis5K0c4LzZjZEpadHdHZTFJU01BUFYwTUczUi9SaVpqUVExWUZCU2ZMVXNSZjI5ckNSK04xamVaTDNMaXlZWVBiVmRCUnV1VWVkTWVwUTlaNERBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDU2NzYyMjA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWR00rV1ZiUFdUakduNHhDdzc5RmpzaW1PSkhDaEhJR1A1eGR3VnNWQjVBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MTQ5MDA0fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
