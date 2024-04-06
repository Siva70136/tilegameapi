const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Generate random grid pattern

const generateGridPattern = () => {
    const colors = ['blue', 'red','green'];
    const grid = [];

    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            const randomIndex = Math.floor(Math.random() * colors.length);
            console.log(randomIndex)
            row.push(colors[randomIndex]);
        }
        grid.push(row);
    }

    return grid;
};

let currentGrid;

app.get('/grid-pattern', (req, res) => {
    currentGrid = generateGridPattern();
    res.json({ grid: currentGrid });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
