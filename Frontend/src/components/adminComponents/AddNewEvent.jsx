import React,{useState, useEffect} from 'react'

const AddNewEvent = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      location: '',
      url: '',
      type: '',
      date: '',
      dateTime: '',
  });

  useEffect(() => {
      fetchEvents();
  }, []);

  const fetchEvents = async () => {
      const response = await fetch('/admin/events/all');
      const data = await response.json();
      setEvents(data);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/admin/events/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
      });
      if (response.ok) {
          fetchEvents();
          setFormData({
              name: '',
              description: '',
              location: '',
              url: '',
              type: '',
              date: '',
              dateTime: '',
          });
      }
  };

  return (
      <div className="p-4 max-w-md m-auto">
          <h1 className="text-2xl font-bold mb-4">Add New Event</h1>
          <form onSubmit={handleSubmit} className="mb-6 space-y-4">
              <input 
                  type="text" 
                  name="name" 
                  placeholder="Event Name" 
                  className="input input-bordered w-full" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
              />
              <textarea 
                  name="description" 
                  placeholder="Description" 
                  className="textarea textarea-bordered w-full" 
                  value={formData.description}
                  onChange={handleChange}
                  required 
              />
              <input 
                  type="text" 
                  name="location" 
                  placeholder="Location" 
                  className="input input-bordered w-full" 
                  value={formData.location}
                  onChange={handleChange}
                  required 
              />
              <input 
                  type="url" 
                  name="url" 
                  placeholder="URL" 
                  className="input input-bordered w-full" 
                  value={formData.url}
                  onChange={handleChange} 
              />
              <input 
                  type="text" 
                  name="type" 
                  placeholder="Type" 
                  className="input input-bordered w-full" 
                  value={formData.type}
                  onChange={handleChange}
                  required 
              />
              <input 
                  type="date" 
                  name="date" 
                  className="input input-bordered w-full" 
                  value={formData.date}
                  onChange={handleChange}
                  required 
              />
              <input 
                  type="datetime-local" 
                  name="dateTime" 
                  className="input input-bordered w-full" 
                  value={formData.dateTime}
                  onChange={handleChange}
                  required 
              />
              <button type="submit" className="btn bg-gray-dark text-white ">Add Event</button>
          </form>

          <h2 className="text-xl font-semibold mb-2">All Events</h2>
          <ul className="space-y-2">
              {events.map((event) => (
                  <li key={event.id} className="card w-full bg-base-100 shadow-xl p-4">
                      <h3 className="font-bold">{event.name}</h3>
                      <p>{event.description}</p>
                      <p><strong>Location:</strong> {event.location}</p>
                      <p><strong>Type:</strong> {event.type}</p>
                      <p><strong>Date:</strong> {event.date}</p>
                      <p><strong>Date and Time:</strong> {event.dateTime}</p>
                      <a href={event.url} className="link">More Info</a>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default AddNewEvent;


