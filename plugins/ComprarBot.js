// Créditos A Niño Piña
let handler = async (m, { conn }) => {
m.react('🍭');
const message = "〔🍭 *CROW - BOT* 📩〕\n\n> *🎩 HOLA ✨*\n\n*BOT PARA GRUPO* :\n> wa.me/50557865603\n\n*BOT PERZONALIZADO* :\n> wa.me/50557865603";
if (m, rcanal) {
const img = 'https://i.ibb.co/qJNL5Bg/file.jpg';
try {
await conn.sendMessage(m.chat, { image: { url: img }, caption: message, mimetype: 'image/jpeg' }, { quoted: fkontak });
} catch (error) {
console.error('Error al enviar el mensaje:', error);
}
}
}
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = ['comprar'];
export default handler;