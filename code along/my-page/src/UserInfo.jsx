import { useState } from "react";

function UserInfo() {

    const [user, setUser] = useState({
        name: "Janus Imus",
        email: "janus@gmail.com",
        bio: "Ako po si Janus"
    })

    return (
        <div className="card shadow">
            <div className="card-body m-sm-2">
                <h3 className="card-text fw-bold">
                    {user.name}
                </h3>
                <figcaption className="card-text">
                    {user.email}
                </figcaption>
                <figcaption className="card-text">
                    {user.bio}
                </figcaption>
            </div>
        </div>
    )
}

export default UserInfo;