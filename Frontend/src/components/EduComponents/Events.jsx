import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Event = () => {
        // State variables to manage selected date, search term, selected event type, and events list
    const [selectedDate, setSelectedDate] = useState(null);
    const [search, setSearch] = useState('');
    const [selectedType, setSelectedType] = useState('All');
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
        
    // Function to filter events based on selected date, type, and search term
    const filterEvents = () => {
        return events.filter(event => {
                        // Check if the event date matches the selected date
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
        setSelectedType('All');
    };

    
    // Generate a Google Calendar URL for adding an event
    const googleCalendarUrl = (event) => {
        const date = new Date(event.dateTime);
        return `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.name)}&dates=${event.date}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    };

    return (
        <div className=" mx-auto p-10 bg-gray w-full">
            <h1 className="text-3xl font-bold mb-6 text-center text-black">Educational Events</h1>
            
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Calendar</h2>
                        <Calendar
                            onChange={setSelectedDate}
                            value={selectedDate}
                            className="w-full max-w-xs mx-auto"
                        />
                        <p className="text-center mt-2">
                            {selectedDate ? selectedDate.toDateString() : "No date selected"}
                        </p>
                    </div>
                </div>

                <div className="md:w-2/3">
                    <div className="bg-lightBlue p-4 rounded-lg shadow-md mb-6">
                        <form className="flex flex-col md:flex-row gap-4">
                            <input
                                type="search"
                                className="flex-grow p-2 text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
                                className="bg-red text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
                            >
                                Clear Filters
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filterEvents().map(event => (
                            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                <div className="p-4">
                                    <h2 className="font-bold text-xl mb-2 text-blue-600">{event.name}</h2>
                                    <p className="text-gray-600 mb-2">{event.dateTime.toLocaleString()}</p>
                                    <p className="text-gray-700 mb-2">{event.description}</p>
                                    <p className="text-gray-600 mb-2">{event.location}</p>
                                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
                                        {event.type}
                                    </span>
                                </div>
                                <div className="px-4 py-2 bg-gray-100">
                                    <a
                                        href={googleCalendarUrl(event)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-center bg-yellow hover:bg-lightYellow text-white font-bold py-2 px-4 rounded transition duration-300"
                                    >
                                        Add to Google Calendar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;

