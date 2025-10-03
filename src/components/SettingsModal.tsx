import React, { useState } from 'react'
import { Avatar } from '../types'

interface Props {
  onClose: () => void
  avatars: Avatar[]
  setAvatars: (avatars: Avatar[]) => void
}

const SettingsModal: React.FC<Props> = ({ onClose, avatars, setAvatars }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [temperature, setTemperature] = useState(0.5)
  const [webAccess, setWebAccess] = useState(false)

  // TODO: استخدم Gemini وImagen لتوليد الاسم والتوجيه والصورة تلقائياً

  const handleSave = () => {
    const newAvatar: Avatar = {
      id: Date.now().toString(),
      name,
      description,
      systemPrompt: description,
      image: 'https://placehold.co/80x80', // TODO: صورة توليدية
      temperature,
      webAccess,
      createdAt: new Date().toISOString()
    }
    setAvatars([...avatars, newAvatar])
    onClose()
  }

  return (
    <div className="modal">
      <h3>إنشاء شخصية جديدة</h3>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="اسم الشخصية" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="وصف الشخصية أو توجيهها" />
      <label>
        درجة الإبداع:
        <input type="range" min={0} max={1} step={0.01} value={temperature} onChange={e => setTemperature(Number(e.target.value))} />
      </label>
      <label>
        السماح بالوصول للويب:
        <input type="checkbox" checked={webAccess} onChange={e => setWebAccess(e.target.checked)} />
      </label>
      <button onClick={handleSave}>حفظ</button>
      <button onClick={onClose}>إلغاء</button>
    </div>
  )
}

export default SettingsModal