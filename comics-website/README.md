# Comics Website

This project is a web application for hosting and displaying comics in a gallery format. Users can browse through various comics, view individual panels in a lightbox, and navigate between different comics seamlessly.

## Project Structure

The project is organized as follows:

```
comics-website
├── public
│   ├── comics                # Directory containing comic panels organized by comic
│   ├── index.html            # Main HTML document for the website
│   └── styles
│       └── main.css          # CSS styles for the website
├── src
│   ├── components            # React components for the application
│   ├── pages                 # Pages of the application
│   ├── App.tsx               # Main application component
│   └── types                 # TypeScript types and interfaces
├── package.json              # npm configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Features

- **Gallery View**: Displays all comics in a visually appealing gallery format.
- **Lightbox Effect**: Allows users to click on a comic to view its panels in a lightbox, with vertical scrolling and navigation arrows to move between panels and comics.
- **Responsive Design**: The website is designed to be responsive and accessible on various devices.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd comics-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Navigate to the Comics page to view the gallery of comics.
- Click on any comic to open it in a lightbox and scroll through the panels.
- Use the navigation arrows to move between different comics.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.