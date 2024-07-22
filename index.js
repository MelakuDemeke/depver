const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req, res) => {
    const blogPosts = [
        {
            title: "Understanding Node.js Event Loop",
            content: "The Node.js event loop is what allows Node.js to perform non-blocking I/O operations...",
            tags: ["Node.js", "JavaScript", "Programming"],
            isPublished: true
        },
        {
            title: "Getting Started with MongoDB",
            content: "MongoDB is a NoSQL database that uses a document-oriented data model...",
            tags: ["MongoDB", "Database", "NoSQL"],
            isPublished: false
        }
    ];
    res.json(blogPosts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});