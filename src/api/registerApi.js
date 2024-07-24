import { service } from '@/utils/request.js';

export const registerApi = async (options) => {
    try {
        console.log(options, 'options');
        const res = await service.post("/register", options);
        return res;
    } catch (error) {
        console.error('registerApi报错', error);
        throw error;
    }
};
