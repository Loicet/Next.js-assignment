import { Metadata } from "next";
import { Mail, MapPin, Phone, Globe, Briefcase, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Blogster",
  description: "Learn more about the author and this blog",
};

interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

async function getAuthor(): Promise<Author> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  
  if (!res.ok) {
    throw new Error('Failed to fetch author data');
  }
  
  return res.json();
}

export default async function AboutPage() {
  const author = await getAuthor();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <div className="max-w-4xl mx-auto px-6 py-16">
        <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 text-sm font-medium">
          <ArrowLeft size={16} />
          Back to Home
        </a>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            I'm a writer, developer, and maker sharing thoughts on software, design, and the creative process.
          </p>
        </div>

        {/* Author Card */}
        <div className="border border-gray-200 rounded-lg p-8 mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{author.name}</h2>
            <p className="text-gray-600">@{author.username}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${author.email}`} className="text-gray-900 hover:text-gray-600">
                    {author.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                  <p className="text-gray-900">
                    {author.address.street}, {author.address.city}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                  <p className="text-gray-900">{author.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Website</p>
                  <a 
                    href={`https://${author.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-600"
                  >
                    {author.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <Briefcase className="text-gray-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Company</p>
                <p className="text-gray-900 font-medium">{author.company.name}</p>
                <p className="text-gray-600 italic mt-1">"{author.company.catchPhrase}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="prose max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Story</h3>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              I've been building for the web for over a decade, working with startups and established companies 
              to create products that people love to use.
            </p>
            <p>
              This blog is where I share what I'm learning about software development, product design, 
              and the creative process. I believe in building thoughtfully, writing clearly, and sharing generously.
            </p>
            <p>
              When I'm not writing code or articles, you can find me reading, exploring new places, 
              or working on side projects that interest me.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Let's Connect</h3>
          <p className="text-gray-600 mb-6">
            Interested in working together or just want to say hi? I'd love to hear from you.
          </p>
          <div className="flex gap-4">
            <a 
              href={`mailto:${author.email}`}
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/blog"
              className="border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Read My Articles
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}