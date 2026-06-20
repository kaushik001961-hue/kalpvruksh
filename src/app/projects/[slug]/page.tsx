interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Project: {slug}</h1>
    </div>
  );
}