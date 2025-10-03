import React from 'react'
import { Message, Avatar } from '../types'

const ExportButton: React.FC<{ messages: Message[], avatar?: Avatar }> = ({ messages, avatar }) => {
  const exportMarkdown = () => {
    let md = `# سجل محادثة مع ${avatar?.name || 'شخصية غير معروفة'}\n\n`
    messages.forEach(msg => {
      md += `**${msg.sender === 'user' ? 'أنت' : avatar?.name}**: \n${msg.content}\n\n`
    })
    const blob = new Blob([md], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `chat-${avatar?.name || 'unknown'}.md`
    a.click()
    URL.revokeObjectURL(url)
  }
  return <button onClick={exportMarkdown}>تصدير المحادثة</button>
}

export default ExportButton