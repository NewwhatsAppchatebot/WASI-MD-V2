//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HWvqiyGBSATKWgtLmC5T6L";
global.website = process.env.GURL || "https://chat.whatsapp.com/HWvqiyGBSATKWgtLmC5T6L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "994400744050";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFpQ0tDdDJ5cDA4V0N5akxzT0JlSUY0V3Z3NUY3TFlhMXBtd2ZTV3BXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXduY043M21YV2I3MHpYTDMyNmtnVkRFN1h1bkdaeDNDcVAvMmF0bXVtcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ3Jibm5lZXRodjFuZlQrZlUwR2pxQmVsWkN0TjJxWDNrNDd0elE3dzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnN1RESy85eTBBV2swMzM0ekxjL0szTTJTV0JHcHJSNkw1Y215OUcybWtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJR1ZGZmpkQlZ1a2R3TnBJeUdwRjFVL1FaM2Z2emFhQ1Zad2RMTEFPM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNETjd3WWcwRWJaVWJkRjlIK1FyRERNUG4wYjIwRlJPNEVsVTA1bnN3aUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtVVWw3akhqSTZBN2tKSkpNbkc0TFBCZnYrcjQyTDJ3NmYzQytiWmQyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnRYakRmNXUyVXZpUUFWaWg3V0NzR1hMekpoUEh0RW4rK2V2eTdYQnlIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5NdVhPNDdQYjZtc2lNSDcxbXlBUE1LalhibjdGd1dkeUZUSHc5cm5WSWpUTE9tVFdyK211aDJuOS9aMjY4VHk1RysyVnBuMUV2ZTV0SjcvNlY3T0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJiVWlWS0NBdm53aE8rR1U4NERXekJVVEkrWHNIWU5pSE9YaEh1L09zOGljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMDc0NDA1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MkE2QUM3NjMyMzYyMEQzRjBERTYzRDJGRjk2QjkyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NjMwOTAxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDA3NDQwNTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUJDQjlFMUE0MTg1MDRERUZFRTgwNUMxQTlBNDJEMzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTYzMDkwMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0lBNHI5cVJTVGFEU2hDUjFBTVJzZyIsInBob25lSWQiOiJmY2Q2ZWQ0Ny1jMTZjLTRiMjYtYWVjZS05ZDY3MzVlOTc2YmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhoK05DREQvQ3AyLy91UUxJYlkwTVdCS3ZRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik95UWszOUUzeHRkdmVLUWVGNkN2QWJ4RnFkWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOUktQTEUyTSIsIm1lIjp7ImlkIjoiOTk0NDAwNzQ0MDUwOjMyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik0gRmFoZWVtIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMV3FpOUFGRUkzNC9iTUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyRW1lcmdJWlJaVGl3MVoraUdsWnlmNHhGTmpQRzBGT284RW1uNU9oRDNnPSIsImFjY291bnRTaWduYXR1cmUiOiJSallOeUlvRk9kMUVTbEIvMElYVWVkU2hvV3lmenMyYUltbVhQVVo4V0dIaWZncXArY2hrUFRKQm5xUkRvK0R3WWtzeW9XUFU5N0xOMEFZczJrSXJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYlJQbDFWSTVnUGxTcWlOa3pVU3JHb2ZWUWZDaUt5ZnJUTmZkOGlUcWVseXAyYXhzS0NUanRFc2lvZmF3YW1TTHArcHNERHZrNzNkcm5KU1AzZ2hDQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5OTQ0MDA3NDQwNTA6MzJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXhKbnE0Q0dVV1U0c05XZm9ocFdjbitNUlRZenh0QlRxUEJKcCtUb1E5NCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTYzMTA2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEMTEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Faheem-hacker-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "Faheem",
  errorChat: process.env.ERROR_CHAT || "994400744050",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "Faheemhacker").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
