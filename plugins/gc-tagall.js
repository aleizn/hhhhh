let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*TEXTO:* ${pesan}`
let teks = `Creador Wa.me/529984856375 SI QUIERES BOT COMUNICAME
*⺀𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🔥 @${mem.id.split('@')[0]}\n`}
teks += `└Ivansito`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['invocame <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(invocame|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
