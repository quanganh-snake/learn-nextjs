import * as React from 'react';

export default function LoginPage() {
    async function handleLoginClick() {}

    async function handleGetProfileClick() {}

    async function handleLogoutClick() {}

    return (
        <div>
            <h1>Login Page</h1>

            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfileClick}>Get Profile</button>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    );
}
