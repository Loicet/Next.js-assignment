import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Next.js Assignment",
  description: "About page with author information",
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
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About the Author</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{author.name}</h2>
          <p className="text-gray-600">@{author.username}</p>
        </div>
        
        <div className="space-y-3">
          <div>
            <strong className="text-gray-700">Email:</strong>
            <p className="text-gray-600">{author.email}</p>
          </div>
          
          <div>
            <strong className="text-gray-700">Address:</strong>
            <p className="text-gray-600">
              {author.address.street}, {author.address.city}
            </p>
          </div>
          
          <div>
            <strong className="text-gray-700">Phone:</strong>
            <p className="text-gray-600">{author.phone}</p>
          </div>
          
          <div>
            <strong className="text-gray-700">Website:</strong>
            <p className="text-gray-600">
              <a 
                href={`https://${author.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {author.website}
              </a>
            </p>
          </div>
          
          <div>
            <strong className="text-gray-700">Company:</strong>
            <p className="text-gray-600">{author.company.name}</p>
            <p className="text-sm text-gray-500 italic">"{author.company.catchPhrase}"</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This page uses Server-Side Rendering (SSR) to fetch author data from an external API.
        </p>
      </div>
    </div>
  );
}