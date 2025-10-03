import React from 'react'
import { Avatar } from '../types'

interface SidebarProps {
  avatars: Avatar[]
  selectedAvatarId: string | null
  onSelect: (id: string) => void
  onAdd: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ avatars, selectedAvatarId, onSelect, onAdd }) => (
  <aside className="sidebar">
    <button className="add-avatar-btn" onClick={onAdd}>+ شخصية جديدة</button>
    <ul>
      {avatars.map(a => (
        <li key={a.id}
            className={a.id === selectedAvatarId ? 'selected' : ''}
            onClick={() => onSelect(a.id)}>
          <img src={a.image} alt={a.name} className="avatar-img"/>
          <span>{a.name}</span>
        </li>
      ))}
    </ul>
  </aside>
)

export default Sidebar