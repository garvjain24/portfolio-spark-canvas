import { useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import blogs from "@/data/blogs.json";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.blogs.filter((blog) => {
    const searchContent = `${blog.title} ${blog.content} ${blog.tags.join(" ")}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white animate-fade-in">
        <div className="container py-8 space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-gradient text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights, tutorials, and tech discussions.
            </p>
            <div className="h-1 w-20 bg-portfolio-purple mx-auto rounded-full mt-4"></div>
          </div>
          <div className="flex justify-between items-center gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;