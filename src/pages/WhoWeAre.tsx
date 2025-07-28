import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1: Alpha's Three Commitments */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Alpha's Three Commitments</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Our learning is personalized, purpose-driven, and setting kids up for success in the real world
          </p>
        </div>
      </section>

      {/* Section 2: Kids Will Love School */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-[#c2ecfd] bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Kids Will Love School</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            Students lead their own growth through regular feedback and one-on-one support, while exceptional guides keep them motivated with creative tools and coaching. With unique experiences like Mobile Squad field trips and in-school adventures, we design every day to spark curiosity and make school a place kids truly love.
          </p>
        </div>
      </section>

      {/* Section 3: Kids Will Learn 2X in 2 Hours */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Kids Will Learn 2X in 2 Hours</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            At Alpha, students master core subjects in just two hours a day using adaptive AI, mastery-based learning, and time-tested focus strategies. This approach leads to 2.6x average academic growth, with top students reaching up to 6.5x—consistently outperforming national benchmarks.
          </p>
        </div>
      </section>

      {/* Section 4: Kids Will Learn Life Skills for the Future */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-[#c2ecfd] bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Kids Will Learn Life Skills for the Future</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-12">
            At Alpha, students build grit, creativity, and adaptability through hands-on workshops focused on 24 essential life skills. From public speaking and coding to entrepreneurship and outdoor challenges, our experiential learning prepares them to lead, communicate, and grow with confidence—long after graduation.
          </p>
          <Button asChild variant="outline" className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-200 text-lg px-8 py-4">
            <a href="https://alpha.school/the-program/" className="flex items-center gap-2">
              Explore the Alpha Program
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;