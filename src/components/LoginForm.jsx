import { useState } from 'react'
import axios from 'axios'

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID':"537878be-55e6-479f-bfc1-a11444f4d0dc", 'User-Name': username, 'User-Secret':password };

        try {
            // username | password => chatengine => give messages
            await axios.get('https://api.chatengine.io/chats',{headers:authObject}); 
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            // works-out --> logged in
            
        } catch (error) {
            //error --> try with different credentials 
            setError('Oops, incorrect credentials ')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" align="center">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
