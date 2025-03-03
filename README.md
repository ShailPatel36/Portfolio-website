# Portfolio Website 🌐

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing projects, skills, and contact information.

**Live Demo:** [https://shailpatel36.github.io/Portfolio-website/](https://shailpatel36.github.io/Portfolio-website/)

![Portfolio Preview](./public/portfolio-preview.png)

## Features ✨
- Responsive design for all screen sizes
- Dark/light mode toggle
- Smooth animations with Framer Motion
- Interactive project showcase
- Contact form with email integration
- Modern UI with Tailwind CSS
- Component-based architecture

## Technologies Used 🛠️
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

- Framer Motion for animations
- React Icons
- React Toastify for notifications
- GitHub Pages for deployment

## Installation 💻

1. Clone the repository:
\`\`\`bash
git clone https://github.com/shailpatel36/Portfolio-website.git
cd shailpatel36-portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

## Project Structure 📁
\`\`\`
shailpatel36-portfolio-website/
├── app/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   └── Work.jsx
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   └── images/
├── .github/
│   └── workflows/
│       └── nextjs.yml
├── tailwind.config.mjs
└── next.config.mjs
\`\`\`

## Deployment 🚀
This project is deployed using GitHub Pages with GitHub Actions. The deployment workflow:
1. Automatically builds the project on push to \`main\` branch
2. Exports static site using \`next export\`
3. Deploys to GitHub Pages via \`gh-pages\` branch

Configured in:
- \`next.config.mjs\` for static export
- \`.github/workflows/nextjs.yml\` for CI/CD

## Contributing 🤝
Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License 📄
Distributed under the MIT License. See \`LICENSE\` for more information.

## Acknowledgments 🙏
- Next.js Team
- Tailwind CSS Creators
- Framer Motion Library
- React Community
EOF
