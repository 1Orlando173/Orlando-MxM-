import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🍂 ¡Hola! Soy CrowBot, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^English$/i.test(m.text)) {
conn.reply(m.chat, `*The first one to speak is gay*`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*No digas mamadas, Meriyein*`, m, rcanal, )
}

if (/^Bot de mrd/i.test(m.text)) {
conn.reply(m.chat, `*Ya te dieron De Comer?🥵🍆*`, m, rcanal, )
}
  
if (/^Bot en decadencia/i.test(m.text)) {
conn.reply(m.chat, `*Calla 🍆🥵*`, m, rcanal, )
}

if (/^Niño Piña/i.test(m.text)) {
conn.reply(m.chat, `*Niño Piña Es Mi Creador, Respeta!*`, m, rcanal, )
}
  
  
if (/^Crow$/i.test(m.text)) {
conn.reply(m.chat, `*Hola Eres Fan De* *CrowBot o Brawl Stars*
*Entonces Sigue El Canal Oficial!*
> https://whatsapp.com/channel/0029VakfOZfHFxP7rNrUQk2d
 *Gracias por utilizar CrowBot-MD* `, m, rcanal, )
}
if (/^duda$/i.test(m.text)) {
conn.reply(m.chat, `*Hola tienes alguna duda sobre el bot o sobre el hosting enviame mensaje al privado* ☁ Wa.me/50557865603`, m, rcanal, )
}
return !0;
};
export default handler;
