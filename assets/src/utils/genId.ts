import Blob from '../blob';

export const genId = () => {
    const id = `${Date.now()}/${Math.floor(Math.random() * 100)}`;

    return id;
};
