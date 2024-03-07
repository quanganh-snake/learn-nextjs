import { useState } from 'react';
import { authApi } from '@/api/index';

export default function LoginPage() {
    const [isError, setIsError] = useState('');

    async function handleLoginClick() {
        try {
            await authApi.login({
                username: 'tbqa',
                password: '111111',
            });
            setIsError('Login successfully!');
        } catch (error: any) {
            setIsError(error.message);
            console.log('Failed to login!', error);
        }
    }

    async function handleGetProfileClick() {
        try {
            await authApi.getProfile();

            setIsError('Get profile successfully!');
        } catch (error: any) {
            setIsError(error.message);
            console.log('Failed to get profile!', error);
        }
    }

    async function handleLogoutClick() {
        try {
            await authApi.logout();
            setIsError('Logout successfully!');
        } catch (error: any) {
            setIsError(error.message);
            console.log('Failed to log out!', error);
        }
    }

    return (
        <div>
            <h1>Login Page</h1>

            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleGetProfileClick}>Get Profile</button>
            <button onClick={handleLogoutClick}>Logout</button>

            <div className="">{isError.trim() !== '' && <p>{isError}</p>}</div>
        </div>
    );
}
