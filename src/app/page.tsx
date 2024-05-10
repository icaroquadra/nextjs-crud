import { PostsLayout } from "@/components/posts-layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-5xl flex flex-col items-center justify-between font-mono text-sm">
        <p className="mb-4 text-center">
          Get started by editing{" "}
          <code className="font-bold">src/pages/index.js</code>
        </p>
        <div className="mt-4">{renderPosts()}</div>
      </div>
    </main>
  );
}
