let handler = async (m, { conn, text, usedPrefix, command }) => {
// Verifica si se ingresó texto
if (!text) throw '⚠ *_️Ingrese la sugerencia que desea enviar._*';
// Verifica la longitud del texto
if (text.length < 10) throw '⚠️ *_Especifique bien la sugerencia, mínimo 10 caracteres._*';
if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar la sugerencia._*';
// Formatea el mensaje de la sugerencia
const teks = `╭───────────────────\n│⊷〘 *S U G E R E N C I A* 🌟 〙⊷\n├───────────────────\n│⁖🧡꙰  *Cliente:*\n│✏️ Wa.me/${m.sender.split`@`[0]}\n│\n│⁖💚꙰  *Mensaje:*\n│📩 ${text}\n╰───────────────────`;
// Envía el mensaje al grupo
try {
await conn.sendMessage('HFYmBzD7MJvLwXpr5CmUqF@g.us', teks, { mentions: conn.parseMention(teks) });
m.reply('⚠️ *_La sugerencia se envió al grupo, gracias por colaborar!_*');
} catch (error) {
console.error(error);
m.reply('⚠️ *_Ocurrió un error al enviar la sugerencia, intenta de nuevo._*');
}
}
handler.help = ['sugerir'];
handler.tags = ['info'];
handler.command = /^(sugerir|sugerencia)$/i;
export default handler;