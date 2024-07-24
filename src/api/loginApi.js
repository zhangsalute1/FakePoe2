import { service } from '@/utils/request.js';

export const loginApi = async (options) => {
    try {
        console.log(options, 'options');
        const res = await service.post("/login", options);
        return res;
    } catch (error) {
        console.error('loginApi报错', error);
        throw error;
    }
};
