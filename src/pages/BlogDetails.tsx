import { useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import blogs from "@/data/blogs.json";
import type { Comment } from "@/types/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const blog = blogs.blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Link to="/" className="text-primary hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: Comment = {
      id: Date.now(),
      author: name,
      content: comment,
      date: new Date().toISOString(),
    };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
    toast({
      title: "Comment posted",
      description: "Your comment has been added successfully.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The blog post URL has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen">
        <Navbar/>
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white animate-fade-in">
      <div className="container py-8 space-y-8 max-w-4xl">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link to="/blog" className="flex items-center text-gray-600 hover:text-portfolio-purple">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to blogs
          </Link>
          <Button variant="outline" onClick={handleShare} className="flex items-center gap-2 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Blog Header */}
        <div className="space-y-4">
          <div className="space-x-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-portfolio-purple text-white">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <time>{format(new Date(blog.date), "MMMM d, yyyy")}</time>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
        <p 
  className="text-lg leading-relaxed" 
  dangerouslySetInnerHTML={{ __html: blog.content }}
></p>
        </div>

        {/* Backlinks */}
        {blog.backlinks && blog.backlinks.length > 0 && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
            <div className="grid gap-4">
              {blog.backlinks.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="text-portfolio-purple hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          
          {/* Comment Form */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Write your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="bg-portfolio-purple text-white hover:bg-portfolio-purple/90">
                  Post Comment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                    <time className="text-sm text-gray-600">
                      {format(new Date(comment.date), "MMM d, yyyy")}
                    </time>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetails;