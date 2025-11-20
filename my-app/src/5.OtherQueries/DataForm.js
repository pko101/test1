import React, { useState } from 'react';

function DataForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ username, password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div aria-label='hellowtesting'>Hellow testing
                <button>sample button</button>
            </div>
            
            <div>
                
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input placeholder='sample placeholder'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default DataForm;