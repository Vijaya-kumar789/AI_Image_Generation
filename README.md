# AI Image Generation App

This repository contains an AI-powered image generation application built using Hugging Face's model hosting and APIs. The app allows users to create custom images by providing prompts, using state-of-the-art deep learning models for image generation.

---

## Features

- Generate images from text prompts.
- User-friendly interface for inputting prompts.
- Share generated images with the community.
- Built with modern technologies for responsive performance.

---

## Tech Stack

- **Frontend Repository:** [AI_Image_Generation_FE](https://github.com/Vijaya-kumar789/AI_Image_Generation_FE)
- **Backend Repository:** [AI_Image_Generation_BE](https://github.com/Vijaya-kumar789/AI_Image_Generation_BE)
- **Frontend:** React.js, Bootstrap
- **Backend:** Node.js (Express), MongoDB
- **Image Storage:** Cloudinary
- **AI Model Hosting:** Hugging Face API
- **Deployment:** [Netlify/Render]
---

## Setup and Installation

### Prerequisites

1. Node.js and npm installed.
2. Hugging Face account and API key.
3. MongoDB instance running locally or in the cloud.
4. Cloudinary account and API key.

### Steps

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/Vijaya-kumar789/AI_Image_Generation_FE.git
   cd AI_Image_Generation_FE
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables for the frontend:
   - Create a `.env` file in the root directory.
   - Add your Hugging Face API key:
     ```env
     REACT_APP_HUGGING_FACE_API_KEY=your-api-key
     ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

5. Clone the backend repository:
   ```bash
   git clone https://github.com/Vijaya-kumar789/AI_Image_Generation_BE.git
   cd AI_Image_Generation_BE
   ```

6. Install backend dependencies:
   ```bash
   npm install
   ```

7. Set up environment variables for the backend:
   - Create a `.env` file in the root directory.
   - Add your MongoDB URI and Cloudinary API credentials:
     ```env
     MONGODB_URI=your-mongodb-uri
     PORT-Your-Port-Number
     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret
     CLIENT_SITE_URL-Your-Client-URL
     ```

8. Start the backend server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the app in your browser (e.g., `http://localhost:3000`).
2. Enter a descriptive text prompt in the input field (e.g., "a futuristic cityscape at sunset").
3. Click the **Generate** button to create an image.
4. Wait for the AI model to process the request and display the generated image.
5. Use the **Share with Community** option to share the generated image.
6. Save or download the generated image if desired.

---

## API Integration

The app uses Hugging Face’s model inference API to generate images. Ensure you have sufficient API usage credits or a subscription for large-scale usage.

### Example API Request

```javascript
const response = await fetch('https://api-inference.huggingface.co/models/model-name', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ inputs: "your-text-prompt-here" }),
});
const result = await response.json();
```

Replace `model-name` with the desired Hugging Face model (e.g., `stabilityai/stable-diffusion-2`).

---

## Deployment

1. Build the frontend project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder of the frontend to your preferred hosting service (e.g., Netlify, Vercel).

3. Deploy the backend to your hosting platform (e.g., Heroku, AWS, Render).

4. Ensure the environment variables are configured in both the frontend and backend hosting services.

---

## Future Enhancements

- Add more AI models for diverse styles.
- User accounts for saving generated images.
- Advanced styling options for generated images.

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements or suggestions.

---

## Acknowledgments

- [Hugging Face](https://huggingface.co) for providing the API and models.
- [Cloudinary](https://cloudinary.com/) for image storage.


