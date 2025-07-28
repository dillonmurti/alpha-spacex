import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StudentsInAction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 - Never Confined to a Classroom */}
        <section className="h-screen relative overflow-hidden bg-black flex items-center justify-center">
          <div className="absolute inset-0 bg-[#c2ecfd] bg-opacity-80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-6xl font-bold mb-8" 
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Never Confined to a Classroom
              </h1>
              
              <p 
                className="text-xl leading-relaxed" 
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                With academics finished by noon, afternoons at Alpha are all about preparing to serve a greater purpose
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 - Real Skills for the Real World */}
        <section className="relative min-h-screen bg-black flex items-center justify-start">
          <div className="absolute inset-0 bg-[#c2ecfd] bg-opacity-80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-left">
              <h2 
                className="text-6xl font-bold mb-8"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Real Skills for the Real World
              </h2>
              <p 
                className="text-xl mb-8 leading-relaxed"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                With the time they've saved by completing academics in the morning, our students dive into life skills, passion projects, and hands-on workshops—turning knowledge into action and curiosity into confidence.
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[250px]"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
              >
                <a href="https://alpha.school/video-library/" className="flex items-center gap-2 justify-center">
                  View our Video Library
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentsInAction;