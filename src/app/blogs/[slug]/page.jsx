import BlogDetails from "@/components/Blogs/BlogDetails";

export default async function page({ params }) {
  const { slug } = await params;
  return <BlogDetails slug={slug} />;
}
