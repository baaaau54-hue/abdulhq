import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Message } from '../types'

const MarkdownRenderer: React.FC<{ message: Message }> = ({ message }) => (
  <div className={`msg ${message.sender}`}>
    <ReactMarkdown>{message.content}</ReactMarkdown>
    {/* TODO: عرض المرفقات إن وجدت */}
    <button onClick={() => navigator.clipboard.writeText(message.content)}>نسخ الرد</button>
  </div>
)

export default MarkdownRenderer