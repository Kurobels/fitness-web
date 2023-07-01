import React, { useState, useRef } from 'react';
import './appointment.css';

function AppointmentForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitNoticeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!fullName || !phoneNumber || !email || !date || !time) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!/^\d{11}$/.test(phoneNumber)) {
      alert('Phone number must be exactly 11 digits.');
      return;
    }

    const newAppointment = {
      fullName,
      phoneNumber,
      email,
      date,
      time,
    };

    // Send the appointment data to the server
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server if needed
        setIsSubmitted(true); // Show the "Appointment Submitted" notice
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        setDate('');
        setTime('');
        // Scroll to the "Appointment Submitted" notice
        submitNoticeRef.current.scrollIntoView({ behavior: 'smooth' });
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occurred during the request
      });
  };

  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <h1>Request Appointment NOW!</h1>
        <form onSubmit={handleSubmit}>
          <div className="formbold-pt-3 formbold-mb-5">
            <label className="formbold-form-label" htmlFor="fullName">Full Name</label>
            <input
              className="formbold-form-input"
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="formbold-pt-3 formbold-mb-5">
            <label className="formbold-form-label" htmlFor="phoneNumber">Phone Number</label>
            <input
              className="formbold-form-input"
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="formbold-pt-3 formbold-mb-5">
            <label className="formbold-form-label" htmlFor="email">Email</label>
            <input
              className="formbold-form-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formbold-pt-3 formbold-mb-5">
            <label className="formbold-form-label" htmlFor="date">Date</label>
            <input
              className="formbold-form-input"
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="formbold-pt-3 formbold-mb-5">
            <label className="formbold-form-label" htmlFor="time">Time</label>
            <input
              className="formbold-form-input"
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button className="formbold-btn" type="submit">Submit</button>
        </form>
        {isSubmitted && (
          <div className="formbold-pt-3 formbold-mb-5" ref={submitNoticeRef}>
            <p style={{ textAlign: 'center', color: '#6a64f1', fontWeight: 'bold' }}>
              Appointment Submitted
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentForm;
