import Image from "next/image";

const techStack = [
  { title: "Flutter", description: "Cross-platform framework for building mobile applications." },
  { title: "Dart", description: "Programming language for Flutter development." },
  { title: "GetX", description: "State management and navigation library for Flutter." },
  { title: "Supabase", description: "Backend-as-a-service platform for database, authentication, and serverless functions." },
  { title: "OpenAI API", description: "Integration with OpenAI’s GPT model for the AI chat assistant." },
  { title: "SQLite", description: "Local database for data storage." },
];

const TechnologyStack = () => {
  return (
    <section className="bg-themeColor relative text-textSecondary py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold flex items-center justify-start mb-10">
          <span className="mr-2">⏳</span> Technology Stack:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white/10 text-white rounded-xl p-6 py-12 cursor-pointer hover:scale-105 duration-300 w-full md:w-72 text-left shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-sm opacity-90">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Image width={200} height={200} className="absolute right-0 bottom-1/4" src="/images/waves.png" alt="waves" />
    </section>
  );
};

export default TechnologyStack;
