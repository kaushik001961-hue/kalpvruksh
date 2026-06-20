import Image from "next/image";

const projects = [
  {
    title: "Tree Plantation Drive",
    image: "/images/project1.jpg",
    description:
      "Creating a greener future through large-scale plantation campaigns.",
  },
  {
    title: "Education Support",
    image: "/images/project2.jpg",
    description:
      "Providing books, scholarships and educational support for children.",
  },
  {
    title: "Healthcare Camp",
    image: "/images/project3.jpg",
    description:
      "Free medical checkups and health awareness programs for rural communities.",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#F7F9F4] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            🌳 Featured Projects
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Creating Lasting
            <span className="text-green-700"> Impact</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore some of our ongoing and completed initiatives that
            are transforming lives and strengthening communities.
          </p>

        </div>

        {/* Project Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-800">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <button className="mt-8 rounded-full bg-green-700 px-6 py-3 text-white transition hover:bg-green-800">
                  Read More →
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* View All */}

        <div className="mt-16 text-center">

          <button className="rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">

            View All Projects

          </button>

        </div>

      </div>

    </section>
  );
}