// Código sencillo 
let handler = async (m, { conn }) => {
m.react('🍭');
const message = "〔🍭 *CROW - BOT* 📩〕\n\n> *🎩 HOLA ✨*\n\n*BOT PARA GRUPO* :\n> Wa.me/5212731590195\n\n*BOT PERZONALIZADO* :\n> Wa.me/5212731590195";
if (m, rcanal) {
const img = 'https://files.catbox.moe/kd7vs5.jpg';
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