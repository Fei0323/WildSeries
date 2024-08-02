const categories = [
    {
        id: 1,
        name: "Science-Fiction",
    },
    {
        id: 2,
        name: "Comédie",
    },
];

const browse = (req, res) => {
    res.json(categories);
};

const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
    const category = categories.find((c) => c.id === parsedId);

    if (category) {
        res.json(category);
    } else {
        res.sendStatus(404);
    }
};

module.exports = { browse, read };