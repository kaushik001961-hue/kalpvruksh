
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

const articles = {
  "tree-plantation-drive": {
    title: "Mass Tree Plantation Drive Successfully Completed",
    category: "Environment",
    date: "June 2026",
    author: "Kalpvruksh Trust",
    image: "/images/news1.jpg",
    content: `
      Kalpvruksh Trust successfully completed a large-scale tree plantation
      initiative involving volunteers, students, and community members.

      More than 2,000 saplings were planted across multiple villages to
      promote environmental sustainability and increase green cover.

      The event focused on creating awareness about climate change,
      biodiversity conservation, and the importance of preserving natural
      resources for future generations.

      Volunteers actively participated in planting, watering, and educating
      local communities about long-term tree care and maintenance.
    `,
  },

  "education-support-program": {
    title: "Educational Support Program Reaches 200 Students",
    category: "Education",
    date: "May 2026",
    author: "Kalpvruksh Trust",
    image: "/images/news2.jpg",
    content: `
      The Educational Support Program reached over 200 students from
      underprivileged backgrounds.

      Students received books, school supplies, scholarships, and
      mentorship support aimed at improving educational opportunities.

      The initiative is part of Kalpvruksh Trust's mission to empower
      future generations through accessible and quality education.
    `,
  },

  "healthcare-camp": {
    title: "Free Healthcare Camp Benefits Hundreds of Residents",
    category: "Healthcare",
    date: "April 2026",
    author: "Kalpvruksh Trust",
    image: "/images/news3.jpg",
    content: `
      Kalpvruksh Trust organized a free healthcare camp providing
      consultations, medicines, and preventive health screenings.

      Hundreds of residents received access to professional healthcare
      services and guidance from experienced medical practitioners.

      The camp focused on promoting preventive healthcare and improving
      overall community wellbeing.
    `,
  },

  "women-empowerment-workshop": {
    title: "Women Empowerment Workshop Conducted",
    category: "Community",
    date: "March 2026",
    author: "Kalpvruksh Trust",
    image: "/images/news4.jpg",
    content: `
      Women from local communities participated in skill development,
      entrepreneurship, and financial literacy sessions.

      The workshop aimed to strengthen confidence, create employment
      opportunities, and encourage self-reliance among participants.
    `,
  },
"village-cleanliness-awareness-campaign": {
  title: "Village Cleanliness Awareness Campaign",
  category: "Environment",
  date: "February 2026",
  author: "Kalpvruksh Trust",
  image: "/images/news5.jpg",
  content: `
    Kalpvruksh Trust organized a village cleanliness awareness campaign
    involving local residents, students, and volunteers.

    The initiative focused on promoting proper waste management,
    sanitation practices, and environmental responsibility.

    Community members participated in cleanliness drives,
    awareness rallies, and educational sessions highlighting
    the importance of maintaining clean public spaces.

    The campaign successfully inspired villagers to adopt
    sustainable habits and contribute toward a healthier environment.
  `,
},

"youth-leadership-development-initiative": {
  title: "Youth Leadership Development Initiative",
  category: "Community",
  date: "January 2026",
  author: "Kalpvruksh Trust",
  image: "/images/news6.jpg",
  content: `
    Kalpvruksh Trust launched a Youth Leadership Development Initiative
    aimed at empowering young individuals with leadership and
    community-building skills.

    Participants attended workshops on communication,
    decision-making, teamwork, and social responsibility.

    The program encouraged youth to become active contributors
    to local development projects and social welfare activities.

    Through mentorship and practical training,
    participants gained valuable experience to lead
    positive change within their communities.
  `,
},

};

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article =
    articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f7faf7]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-900 mb-4">
            Article Not Found
          </h1>

          <Link
            href="/news"
            className="text-green-700 font-semibold"
          >
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf7]">
      {/* Hero Image */}
      <section className="relative h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
           <div className="max-w-5xl mx-auto px-6 text-white">
              <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
                {article.category}
              </span>

              <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-green-100">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {article.date}
                </div>

                <div className="flex items-center gap-2">
                  <User size={18} />
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-green-700 font-semibold mb-10"
        >
          <ArrowLeft size={18} />
          Back to News
        </Link>

       <article className="bg-white rounded-3xl p-10 shadow-lg">
          <div className="prose prose-lg max-w-none">
            {article.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-8 mb-6"
                >
                  {paragraph.trim()}
                </p>
              ))}
          </div>
       </article>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Connected
          </h2>

          <p className="text-green-100 mb-8">
            Follow our journey and discover how Kalpvruksh Trust
            continues creating meaningful impact in communities.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-full font-semibold"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}