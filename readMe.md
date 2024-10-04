# Community Resource Platform - README

## Project Overview

The Community Resource Platform is designed to connect users with valuable resources in education, employment, and support counseling. This platform aims to facilitate access to essential services, enabling users to enhance their personal and professional lives. 

## Features

### 1. Education Page
- **Financial Aid Calculator**: A user-friendly tool that helps users understand their financial aid options.
- **OpenStreetMap Integration**: Displays educational centers in the area, providing users with easy access to local resources.
- **Event Page**: Utilizes React Calendar to showcase upcoming educational events, workshops, and seminars.

### 2. Employment Page
- **Job Seeker View**: 
  - Users can create professional profiles to showcase their skills and experience.
  - Profiles can be shared with recruiters for increased visibility.
  - Job seekers can view and apply for available job positions.

- **Recruiter View**: 
  - Recruiters can browse job seeker profiles to find suitable candidates.
  - Allows recruiters to post new job listings, making it easier to connect with potential hires.

### 3. Support Counselor Page
- **Counselor Profiles**: Support counselors can create profiles highlighting their areas of expertise (health, tax, resume help, and legal).
- **Assistance Requests**: Users can submit requests for assistance, which counselors can review and accept, streamlining the support process.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces, providing a component-based architecture that enhances development efficiency and maintainability.
- **React Calendar**: A powerful calendar component for managing and displaying events on the education page.
- **OpenStreetMap**: An open-source mapping tool that integrates with our platform to display educational centers.

### Backend
- **Node.js**: A JavaScript runtime used for building the server-side logic of the application, ensuring efficient handling of requests and data processing.
- **Express**: A web application framework for Node.js that simplifies routing and middleware integration.
- **MongoDB**: A NoSQL database used to store user profiles, job postings, and assistance requests, allowing for flexible data management.

### Authentication
- **JWT (JSON Web Tokens)**: Used for secure user authentication and authorization, ensuring that only registered users can access certain features of the platform.

### Deployment
- **Heroku**: Used for hosting the application, providing a reliable and scalable environment for both the frontend and backend components.

## Getting Started

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   ```bash
   cd <project-directory>
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env` file in the root directory and configure your environment variables (e.g., database connection string, JWT secret).

4. **Run the Application**: 
   ```bash
   npm start
   ```

5. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.
