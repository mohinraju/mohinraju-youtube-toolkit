# YouTube Toolkit – Hashtag Generator & Thumbnail Downloader

A full-stack application for YouTube content creators. Generate SEO-friendly hashtags and download high-resolution video thumbnails.

## Features
- **Hashtag Generator**: Generate SEO-optimized hashtags based on video topics.
- **Thumbnail Downloader**: Extract and download max-resolution thumbnails from YouTube URLs.
- **Professional UI**: Clean, modern interface built with React.

## Tech Stack
- **Backend**: Java 17, Spring Boot 3, Spring Data JPA, H2 Database.
- **Frontend**: React (Vite), Axios, Vanilla CSS.

## Getting Started

### Prerequisites
- Java 17+
- Maven
- Node.js & npm

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
   The backend runs on `http://localhost:8080`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173`.

## API Endpoints
- **POST** `/api/hashtags/generate` - Generate hashtags.
- **POST** `/api/thumbnail/extract` - Extract thumbnail.

## Database
- H2 Console enabled at `http://localhost:8080/h2-console`.
- JDBC URL: `jdbc:h2:mem:testdb`
- User: `sa`
- Password: `password`
