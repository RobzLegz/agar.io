import Blob from '../blob';

export const genId = (players: Blob[]) => {
    let id = players.length;
    let done = false;

    while (!done) {
        const idCheck = players.filter((p) => p.id === id);

        if (idCheck.length === 0) {
            done = true;
        } else {
            id += 1;
        }
    }

    return id;
};
