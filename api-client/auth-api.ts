import { axiosClient } from "./axios-client"
import { LoginPayloadProps } from '@/models/index';

export const authApi = {
    login(payload: LoginPayloadProps) {
        return axiosClient.post('/login', payload)
    },
    logout() {
        return axiosClient.post('/logout')
    },
    getProfile() {
        return axiosClient.get('/profile')
    }
}