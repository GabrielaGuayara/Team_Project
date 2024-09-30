import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Event = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('All'); // State for event type
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/events/all");
            const data = await response.json();
            setEvents(data);
        } catch (e) {
            console.error(e);
        }
    };

    const filterEvents = () => {
        return events.filter(event => {
            const isDateMatch = selectedDate
                ? new Date(event.date).toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]
                : true;

            const isTypeMatch = selectedType === 'All' || event.type === selectedType;
            const isSearchMatch = search.toLowerCase() === "" || event.name.toLowerCase().includes(search.toLowerCase());

            return isDateMatch && isTypeMatch && isSearchMatch;
        });
    };

    const handleClearFilters = () => {
        setSearch('');
        setSelectedDate(null);
        setSelectedType('All'); // Reset to default type
    };

    const googleCalendarUrl = (event) => {
        const date = new Date(event.dateTime);
        return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.name)}&dates=${event.date}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    };

    return (
        <div className="container mx-auto p-6 flex">
            <div className="w-10/12 p-4 bg-lightBlue shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4">Event List</h1>
                
                <form className="mb-4 flex">
                    <input
                        type="search"
                        className="p-4 block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mr-4"
                        placeholder="Search by name"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <select
                        value={selectedType}
                        onChange={e => setSelectedType(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="All">All Types</option>
                        <option value="Financial Aid">Financial Aid</option>
                        <option value="Collegue 101">Collegue 101</option>
                        <option value="Other">Other</option>
                    </select>
                    <button
                        type="button"
                        onClick={handleClearFilters}
                        className="bg-red-500 text-white py-2 px-4 rounded-l-none"
                    >
                        Clear Filters
                    </button>
                </form>
                <h2 className="text-lg font-semibold">Events</h2>
               
               <div className='flex w-full'>
               <div  className='w-1/3'>
               <ul >
                    {filterEvents().map(event => (
                        <li key={event.id} className="mb-2 p-2 border-b bg-white">
                            <h2 className="font-semibold">{event.name}</h2>
                            <p>{event.dateTime}</p>
                            <p>{event.description}</p>
                            <p>{event.location}</p>
                            <p>{event.type}</p>
                            <a 
                                href={googleCalendarUrl(event)} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue bg-yellow p-2 hover:underline"
                            >
                                Add to Google Calendar
                            </a>
                        </li>
                    ))}
                </ul>
               </div>
               </div>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold mb-4">Calendar</h2>
                <div className="p-4 border bg-gray-200 rounded-lg">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="mb-4"
                    />
                    <p className="text-center">{selectedDate ? selectedDate.toDateString() : "No date selected"}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;


