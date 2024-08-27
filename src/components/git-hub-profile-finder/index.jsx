import { useEffect } from "react";
import { useState } from "react";
export default function GithubProfileFinder() {

    const [userName, setUserName] = useState("madhavan");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data) {
            setUserData(data)
        }
    }

    function handleSubmit() {

    }

    useEffect(() => { fetchGithubUserData(); }, []);

    return <div className="github-profile-finder">
        <div className="input-wrapper">
            <input name="search-by-username" type="text" placeholder="Search Github Username...." value={userName} onChange={(event) => event.target.value} />
            <button onClick={handleSubmit}>submit</button>


        </div>


    </div>

}