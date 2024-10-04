import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEvent = () => {

  const {eventId} = useParams();

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
      const fetchEvent = async () => {
          const response = await fetch(`http://localhost:8080/admin/events/get-by-id/${eventId}`,{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          const data = await response.json();
          console.log(data)
          setFormData(data);
      };
      fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/admin/events/update/${eventId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
      });
      if (response.ok) {
         toast.success('Event updated successfully!');
      }
  };

  return (
      <div className="p-4 max-w-md m-auto">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

          <h1 className="text-2xl font-bold mb-4">Update Event</h1>
          <form onSubmit={handleSubmit} className="mb-6 space-y-4">   
                  
                <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full"
                      value={formData.name}
                      onChange={handleChange}
                      required
                  />

                <textarea
                      type="text"
                      name="description"
                      className="input input-bordered w-full"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      col= '5'
                      rows='8'
                ></textarea>

                <input
                      type="text"
                      name="location"
                      className="input input-bordered w-full"
                      value={formData.location}
                      onChange={handleChange}
                      required
                  />

                <input
                      type="text"
                      name="url"
                      className="input input-bordered w-full"
                      value={formData.url}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="type"
                      className="input input-bordered w-full"
                      value={formData.type}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="date"
                      className="input input-bordered w-full"
                      value={formData.date}
                      onChange={handleChange}
                      required
                  />
                
                <input
                      type="text"
                      name="dateTime"
                      className="input input-bordered w-full"
                      value={formData.dateTime}
                      onChange={handleChange}
                      required
                  />
          
              <button type="submit" className="btn bg-gray-dark text-white">Update Event</button>
          </form>
      </div>
  );
};


export default UpdateEvent;



