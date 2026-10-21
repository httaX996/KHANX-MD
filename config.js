const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUXY+iSBT9L/U6ZlBBQJNOFkEBafwCFd3sQwkFFh8FFoUIE//7Bnu6e7LJTHrrqepS3HvuuefUD0ByXCILNWDyAxQU3yBD3ZY1BQITMK3CEFHQAwFkEEyAOOX0vhag0LgGu5lwJdvm0ErKlp7GYq14iFXzWLWjdZOUL+DRA0V1TrH/h4S8Ip8PwlUeinZsQ2Wk72LX5Jb9hQ19S5ihw7za19csXTfKC3h0GSGmmESz4oIyRGFqoWYNMf0a/KO2uXzTNa08nEarqK52s9DShZ1/K/yFQOOpYp7pzVOlY1/+GvzsUqAWNWq1wNEVGX7utfWZ2pqH1XIVx9ZpVd/nfAz3TvQGv8QRQYEZIMIwa77M+8a8Fqp9wSMn8vhVUCi+9GqpAVlY+WUs4ct0xsRtqlFvbn8ReG2tDN1duFlm3BzPLtccVnfZwNbXVzXQJKWtTuc0jcy2/hX4mr5rJfk/vAtqs5L2Gl7llZa3ReWktn835CW7GSlWx+dRuSvjSG7a4RdlsziURzPS95yWbHLePfsJV98zR4tFVZiphyavieisTV+/m5/wIavon1DC/D79tqk5C+65wJ0P+1QOQj4JnPvptV/X4rdtG75GbUL0cb4miVbvFue8kApDVVSJ67t00Nr9O3YrVz9oGYnPo4Wn1S/PjhLUmAGYDB49QFGES0YhwznpYoLUAzC4OciniD3ZBYlHzBS3PCdqtnaXX2/ClBtJzrY+VlQVY/21lowBt7mGu+gF9EBBcx+VJQoMXLKcNjYqSxihEkz+/qcHCLqzt7l11eQB3wMhpiXbkapIcxi8T/XjK/T9vCLMaYivdhtEwaT/GUaMYRKVHZEVgdS/4BtSL5CVYMJohT46RBQFb6EP16p50BEvbaW1+iqLoAey50BwACZgLEiyPB7KvCxORvxf5fe6SwqL4jtBDPRA+rwlyOJYGgwlaTQe86PuYhd/fMDr0gWIQZyWYALU5YoQWs9mK2soLI+6rhwjRY0U8NnOuzDemN/bubPm5/LWzurrZu5CDZn+Aq6P27RNl653bvw6Ccgy2TyZ/28SMAGkPdBtot08J+XcjWeLNQ9P5S3sI0+24oGYZMY3+8DEfLBooS+u10txf++L6kYrr7pdNdYYwlvsmiJ2zJOb7OuhcZlGL121AN2wj34tJjm66Ne8xqabI9nz+mVui7IY6k1+qbcZJ2tGZteK4fSV9qTh82FQETUaDK567tpJ7SoNvguSsZ9SbRlca5uDXH7SlDfJPi2T/nyq8FNN3aS6Y4jR0/kEdvP7zUze8Xa66j96v/z68wn5jQ2ne9eaxeN7OHMXpZVMd8OIx4Z6iIezkz9yd4OhTOyFcWpPMxM8Hv/0QJFCFuY06zxMApo/i9O86nRqkjD/QzFVSUxtE827hlNYMuVT+y7OUMlgVoDJQBoPR4IkymIPZI1SFA6D7N0zQOmWOfTA41//aW/8TwcAAA==",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
