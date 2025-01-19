# portfolio-sample

# Modern Portfolio Website

A responsive portfolio website built with React and Tailwind CSS, featuring projects showcase, professional experience, achievements, and contact information.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Getting Started

1. **Clone the Repository**

bash
git clone https://github.com/Aditya0545/portfolio-sample.git
cd portfolio-sample

2. **Frontend Setup**

open bash terminal
Navigate to frontend directory
> cd frontend
Install dependencies
> npm install
Start the development server
> npm start

The website will be available at: http://localhost:3000

## Pro


## Available Pages

1. Home (/)
2. Projects (/projects)
3. Experience (/experience)
4. Achievements (/achievements)
5. Contact (/contact)


## Customization

### 1. Modifying Projects
for text modification do changes in frontend/src/data/content.js
for uploading images -> frontend/public/images


### 2. Updating Experience
Edit `src/data/content.js`:

javascript
const experiences = [
{
id: 1,
company: "Company Name",
position: "Your Role",
start_date: "2022-06",
end_date: "Present",
description: "Role description",
technologies: ["Tech1", "Tech2"]
}
];


### 3. Adding Achievements
Edit `src/data/content.js`:

javascript
const achievements = [
{
id: 1,
title: "Achievement Title",
description: "Description",
date: "2024-01-15",
url: "https://..."
}
];


## Troubleshooting

### Common Issues

1. **npm start fails**
bash
Clear npm cache
npm cache clean --force
Delete node_modules and reinstall
rm -rf node_modules
npm install


2. **Page not found errors**
- Check routes in App.js
- Verify you're using correct URLs

3. **Styling issues**
- Verify Tailwind CSS installation
- Check for class name typos
- Clear browser cache

## Building for Production
bash
Navigate to frontend directory
cd frontend
Create production build
npm run build



The production files will be in the `build` folder.

## Deployment Options

1. **Netlify**
   - Connect to your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`

2. **Vercel**
   - Import your GitHub repository
   - Settings will be auto-configured

3. **GitHub Pages**
   - Update homepage in package.json
   - Deploy using gh-pages package

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- JavaScript (ES6+)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

---
Created by Aditya Kumar - adityakumar2019.ak@gmail.com
