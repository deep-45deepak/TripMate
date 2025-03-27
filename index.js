const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {req});
});

app.get('/login', (req, res) => {
  res.render('components/login');
});

// Example route for the Place details page
app.get("/place", (req, res) => {
  console.log(req)
  res.render("place", {req});

});

app.get('*', (req, res) => {
  res.status(404).render('error', { req }); // Passing req to the EJS template
});

app.get('/api', (req, res) => {
  res.json({
    "user": {
      "id": 12345,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "profile": {
        "age": 30,
        "gender": "male",
        "location": "New York, USA"
      },
      "subscriptions": [
        {
          "type": "Premium",
          "start_date": "2024-01-01",
          "status": "active"
        },
        {
          "type": "Newsletter",
          "start_date": "2023-03-15",
          "status": "inactive"
        }
      ]
    },
    "status": "success",
    "message": "Data retrieved successfully",
    "timestamp": "2025-03-25T12:30:00Z"
  }
  );
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})