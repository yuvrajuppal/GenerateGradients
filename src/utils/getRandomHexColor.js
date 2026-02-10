export const getRandomHexColor = () => {
    const chars = '0123456789abcdef';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    return color;
};
