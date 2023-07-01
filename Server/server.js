const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://test:uzmCfetuGzQ2H35k@cluster0.zrd87sd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


  const appointmentSchema = new mongoose.Schema({
    fullName: String,
    phoneNumber: String,
    email: String,
    date: String,
    time: String,
  });
  
  const Appointment = mongoose.model('Appointment', appointmentSchema);
  


app.use(bodyParser.json());

// API route to handle form submissions
app.post('/signup', (req, res) => {
  const newAppointment = req.body;
  Appointment.create(newAppointment)
    .then((createdAppointment) => {
      res.json(createdAppointment);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while saving the appointment.' });
    });
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});