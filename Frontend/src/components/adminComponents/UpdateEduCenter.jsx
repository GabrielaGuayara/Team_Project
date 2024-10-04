import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEduCenter = () => {

  const {eduCenterId} = useParams();

  const [formData, setFormData] = useState({
      name: '',
      organization: '',
      borough: '',
      longitude: '',
      latitude: '',
      address: '',
      zipcode: '',
      phoneNumber: '',
      link: '',
  });

  useEffect(() => {
      const fetchEvent = async () => {
          const response = await fetch(`http://localhost:8080/admin/edu-centers/get-by-id/${eduCenterId}`,{
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
  }, [eduCenterId]);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:8080/admin/edu-centers/update/${eduCenterId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(formData),
      });
      if (response.ok) {
         toast.success('Educational Center updated successfully!');
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

                <input
                      type="text"
                      name="organization"
                      className="input input-bordered w-full"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      col= '5'
                      rows='8'
                />

                <input
                      type="text"
                      name="borough"
                      className="input input-bordered w-full"
                      value={formData.borough}
                      onChange={handleChange}
                      required
                  />

                <input
                      type="text"
                      name="longitude"
                      className="input input-bordered w-full"
                      value={formData.longitude}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="latitude"
                      className="input input-bordered w-full"
                      value={formData.latitude}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="address"
                      className="input input-bordered w-full"
                      value={formData.address}
                      onChange={handleChange}
                      required
                  />
                
                <input
                      type="text"
                      name="zipcode"
                      className="input input-bordered w-full"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="phoneNumber"
                      className="input input-bordered w-full"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                  />
                <input
                      type="text"
                      name="link"
                      className="input input-bordered w-full"
                      value={formData.link}
                      onChange={handleChange}
                      required
                  />
          
              <button type="submit" className="btn bg-gray-dark text-white">Update Educational Event</button>
          </form>
      </div>
  );
};


export default UpdateEduCenter;



