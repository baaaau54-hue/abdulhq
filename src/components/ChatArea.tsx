import React, { useState } from 'react'
import { Avatar, Message } from '../types'
import MarkdownRenderer from './MarkdownRenderer'
import VoiceControls from './VoiceControls'
import ExportButton from './ExportButton'

interface ChatAreaProps {
  avatar?: Avatar
}

const ChatArea: React.FC<ChatAreaProps> = ({ avatar }) => {
  const [messages, setMessages] = useState<Message[]>([])
  // TODO: استخدم hook Gemini API هنا لإرسال الرسائل واستقبال الردود
  // TODO: دعم المرفقات وإظهارها

  return (
    <main className="chat-area">
      <h2>{avatar?.name || 'اختر شخصية'}</h2>
      <div className="messages">
        {messages.map(msg => (
          <MarkdownRenderer key={msg.id} message={msg} />
        ))}
      </div>
      <VoiceControls />
      <ExportButton messages={messages} avatar={avatar} />
      {/* TODO: أضف نموذج إرسال الرسائل ومرفقات */}
    </main>
  )
}

export default ChatArea