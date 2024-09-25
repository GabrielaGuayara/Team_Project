import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EduEvents = [
    { id: 1, title: "Concert in Brooklyn", date: "2024-09-20", location: "Brooklyn" },
    { id: 2, title: "Art Exhibit in Manhattan", date: "2024-09-21", location: "Manhattan" },
    { id: 3, title: "Food Festival in Queens", date: "2024-09-22", location: "Queens" },
    { id: 4, title: "Community Event in Bronx", date: "2024-09-23", location: "Bronx" },
    { id: 5, title: "Marathon in Staten Island", date: "2024-09-25", location: "Staten Island" },
];

const Event = () => {
    const [events] = useState(EduEvents);
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [selectedDate, setSelectedDate] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const filtered = events.filter(event => {
            const matchesLocation = search.toLowerCase() === "" ||
                event.location.toLowerCase().includes(search.toLowerCase());

            const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null; 
            const matchesDate = !formattedDate || event.date === formattedDate;

            return matchesLocation && matchesDate;
        });

        setFilteredEvents(filtered);
    }, [selectedDate, search, events]);

    const handleClearFilters = () => {
        setSearch('');
        setSelectedDate(null); // Reset to null
        setFilteredEvents(events);
    };

    return (
        <div className="container mx-auto p-6 flex">
            <div className="w-1/2 p-4 bg-lightBlue shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4">Event List</h1>
                <form className="mb-4 flex">
                    <input
                        type="search"
                        className="p-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search by Borough"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleClearFilters}
                        className="bg-red-500 text-white py-2 px-4 rounded-l-none"
                    >
                        Clear Filters
                    </button>
                </form>
                <h2 className="text-lg font-semibold">Filtered Events</h2>
                <ul>
                    {filteredEvents.map(event => (
                        <li key={event.id} className="mb-2 p-2 border-b">
                            <h2 className="font-semibold">{event.title}</h2>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-xl font-bold mb-4">Calendar</h2>
                <div className="p-4 border bg-gray-200 rounded-lg">
                    <Calendar
                        onChange={setSelectedDate}
                        value={selectedDate}
                        className="mb-4"
                    />
                    <p className="text-center">Selected Date: {selectedDate ? selectedDate.toDateString() : 'None'}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;
