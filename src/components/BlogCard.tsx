import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    tags: string[];
  };
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-200 rounded-lg">
      <Link to={`/blog/${blog.id}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader className="space-y-2 p-4">
          <div className="space-x-2">
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-portfolio-purple text-white text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{blog.title}</h3>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 text-sm text-gray-500">
          {format(new Date(blog.date), "MMMM d, yyyy")}
        </CardFooter>
      </Link>
    </Card>
  );
};