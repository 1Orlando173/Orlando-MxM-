// Código Hecho Por Niño Piña wa.me/50557865603
let handler = async (m, { conn }) => {
m.react('💫');
const message = "🌐 *`MASHA-HOSTING`*  
> *¡HOSTING DE CALIDAD QUE IMPULSA TU ÉXITO! 🚀* 
🌟 *¡Desata el poder de tu presencia digital con nuestros servers! ⚡️ Rápidos, seguros y listos para la acción. ¡No te quedes atrás, únete a nuestro host de calidad y potencia tus proyectos alojando, bot de WhatsAp, servidores de Minecraf, páginas web y muchos más! 💥"*

💰 *Precios a partir de: [1$ En Adelante!]*  
📞 *Contáctanos:*
• *Wa.me/595976####*
•  *Wa.me/522431268###*
• *Wa.me/5055786560* 

📝 *¡Regístrate ahora y lleva tu proyecto al siguiente nivel!*
> *[https://dash.masha-host.shop/home]*

🌌 *Canal Oficial*
https://whatsapp.com/channel/0029VaoyLfA0LKZKjEh5Yh1J

*¡Haz que tu experiencia digital sea una explosión de éxito! 🧑‍🚀💣*";
if (m.isGroup) {
const imageUrl = 'https://f.uguu.se/aPQnLyQb.jpg'; // No Cambien El Link Zorras
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
}
}
handler.help = ['precios1'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['precios1', 'p1'];
export default handler;