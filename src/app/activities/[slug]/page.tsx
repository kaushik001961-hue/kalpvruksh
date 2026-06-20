interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ActivityPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div>
      Activity: {slug}
    </div>
  );
}