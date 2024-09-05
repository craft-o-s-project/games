const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'pages' directory
app.use(express.static(path.join(__dirname, 'pages')));

// If no specific file is requested, default to serving 'index.html'
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Start the server on the default port for Glitch or 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
