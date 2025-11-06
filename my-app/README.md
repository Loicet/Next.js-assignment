# Next.js Assignment - Rendering Techniques Demo

A comprehensive Next.js application demonstrating various rendering techniques including SSR, SSG, ISR, and CSR, built with TypeScript and Tailwind CSS.

## 🚀 Features

- **Multiple Rendering Techniques**: Demonstrates SSR, SSG, ISR, and CSR
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Dark/Light Mode**: Theme switching with local storage persistence
- **Blog Search**: Real-time client-side search functionality
- **TypeScript**: Full TypeScript support for type safety
- **Modern UI**: Clean and modern user interface

## 📁 Project Structure

```
app/
├── layout.tsx              # Main layout with header, footer, and theme toggle
├── page.tsx               # Home page with CSR date/time component
├── globals.css            # Global styles with dark mode support
├── about/
│   └── page.tsx          # About page with SSR author data
├── blog/
│   ├── layout.tsx        # Nested blog layout with sidebar
│   ├── page.tsx          # Blog list page with SSG
│   └── [id]/
│       └── page.tsx      # Individual blog post with ISR
└── components/
    ├── ThemeProvider.tsx # Theme context provider
    ├── ThemeToggle.tsx   # Dark/light mode toggle button
    └── BlogSearch.tsx    # Client-side blog search component
```

## 🛠 Rendering Techniques Used

### Server-Side Rendering (SSR) - About Page
- **Location**: `app/about/page.tsx`
- **Implementation**: Uses `async` component to fetch author data from JSONPlaceholder API
- **Benefits**: Fresh data on every request, SEO-friendly

### Static Site Generation (SSG) - Blog List
- **Location**: `app/blog/page.tsx`
- **Implementation**: Fetches blog posts at build time
- **Benefits**: Fast loading, CDN-cacheable, SEO-friendly

### Incremental Static Regeneration (ISR) - Blog Posts
- **Location**: `app/blog/[id]/page.tsx`
- **Implementation**: Uses `generateStaticParams` and `revalidate` with 60-second cache
- **Benefits**: Combines static generation with data freshness

### Client-Side Rendering (CSR) - Home Page
- **Location**: `app/page.tsx` (CurrentTime component)
- **Implementation**: Uses `useState` and `useEffect` for real-time updates
- **Benefits**: Dynamic content, interactive user experience

## 🎨 Bonus Features

### Dark/Light Mode Toggle
- **Implementation**: Custom ThemeProvider with local storage persistence
- **Location**: `app/components/ThemeProvider.tsx` and `app/components/ThemeToggle.tsx`
- **Features**: System preference detection, smooth transitions

### Blog Search Functionality
- **Implementation**: Client-side search with real-time filtering
- **Location**: `app/components/BlogSearch.tsx`
- **Features**: Instant search results, responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

### Vercel Deployment (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

## 🔧 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **JSONPlaceholder**: Free fake API for testing and prototyping

## 📊 Performance Considerations

- **SSG Pages**: Pre-rendered at build time for optimal performance
- **ISR**: 60-second revalidation period balances freshness and performance
- **Image Optimization**: Next.js automatically optimizes images
- **Code Splitting**: Automatic code splitting for optimal loading

## 🔒 Security Features

- No sensitive data exposed in client-side code
- API calls made server-side for SSR pages
- Proper error handling for failed API requests

## 🐛 Error Handling

- Graceful fallbacks for API failures
- User-friendly error messages
- Proper TypeScript typing throughout

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the free API
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Live Demo**: [Your deployed URL here]

**GitHub Repository**: [Your GitHub repository URL here]
