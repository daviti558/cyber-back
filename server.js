const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;


const navigationData = {
  "house": {
    "name": "House",
    "slug": "/"
  },
  "about": {
    "name": "About the program",
    "slug": "/o"
  },
  "courses": {
    "name": "Courses",
    "slug": "/courses"
  },
  "contact": {
    "name": "Contact us",
    "slug": "/contact"
  }
};

app.use(express.json());
app.get('/api/navigation', (req, res) => {
  res.json(navigationData);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});