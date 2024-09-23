import { useState } from "react";

export const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setRepeatPassword('');
    }

    const handleClickSave = () => {
        //TODO Save updated password and close form
        if (newPassword === repeatPassword) {
            alert('Save profile')
        } else {
            alert('new password and repeat password are different')
        }
        
      } 
    
      const handleClickClose = () => {
        //TODO Close change password without Save
        alert('Close change password without Save')
      } 

  return (
    <div>
        <label>Old password:
                <input
                    onChange={e => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"
                />
            </label>
            <label>New password:
                <input
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"
                />
            </label>
            <label>Repeat new password:
                <input
                    onChange={e => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    type="password"
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
    </div>
  )
}
