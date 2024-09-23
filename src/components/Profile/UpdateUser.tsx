import { useState } from "react"
import { ChangePassword } from "./ChangePassword";
import { EditProfile } from "./EditProfile";
import { UpdateMode } from "../../utils/types.d";

export const UpdateUser = () => {

    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);

    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile onClose={() => setUpdateMode(UpdateMode.DEFAULT)} />;
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword onClose={() => setUpdateMode(UpdateMode.DEFAULT)} />
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                </div>
            )
    }
}
