'use client'
import React, { useState } from 'react'
import Users from './Users'

function UserInput() {
  const [userId, setUserId] = useState('')
  const [submittedUserId, setSubmittedUserId] = useState('')

  const handleSubmit = () => {
    setSubmittedUserId(userId)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter UserId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{color: 'black'}}
      />
      <div>
        <button onClick={handleSubmit}>Query</button>
      </div>
      <Users userId={submittedUserId}></Users>
    </div>
  )
}

export default UserInput;