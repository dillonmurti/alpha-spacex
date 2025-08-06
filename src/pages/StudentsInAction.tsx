import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StudentsInAction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 - Never Confined to a Classroom */}
        <section 
          className="h-screen relative overflow-hidden flex items-center justify-center"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/681b3f15-4735-46e5-a86e-f38bd1b1443b.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 239, 0.6)' }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                className="text-6xl md:text-6xl text-3xl font-bold mb-8" 
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Never Confined to a Classroom
              </h1>
              
              <p 
                className="text-xl md:text-xl text-sm leading-relaxed" 
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
        <section 
          className="relative min-h-screen flex items-center justify-start"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/0c4833d6-5ef4-4bd0-86ba-d4d72ebdc1c1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-left">
              <h2 
                className="text-6xl md:text-6xl text-3xl font-bold mb-8"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Real Skills for the Real World
              </h2>
              <p 
                className="text-xl md:text-xl text-sm mb-8 leading-relaxed"
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
                className="rounded-full bg-transparent transition-all duration-200 flex items-center gap-2 w-[250px] md:w-[250px] w-[220px] h-[45px] text-sm md:text-sm"
                style={{ 
                  borderColor: '#0000ef',
                  color: '#0000ef',
                  boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0000ef';
                  e.currentTarget.style.color = '#c2ecfd';
                  e.currentTarget.style.borderColor = '#c2ecfd';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#0000ef';
                  e.currentTarget.style.borderColor = '#0000ef';
                }}
              >
                <a href="https://alpha.school/video-library/" className="flex items-center gap-2 justify-center">
                  View our Video Library
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 3 - Create Your Masterpiece */}
        <section 
          className="relative min-h-screen flex items-center justify-end"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/d955d63d-1180-425d-bf07-ad6d668bfce8.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl ml-auto text-right">
              <h2 
                className="text-6xl md:text-6xl text-3xl font-bold mb-8"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Create Your Masterpiece
              </h2>
              <p 
                className="text-xl md:text-xl text-sm mb-8 leading-relaxed"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Our Alpha High students get to spend four years working on a Masterpiece Project. Our students have worked on everything from flattening the cancer curve and redefining teen dating to creating the first teen-led Broadway musical and creating successful businesses.
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[350px] md:w-[350px] w-[300px] h-[45px] text-sm md:text-sm ml-auto"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
              >
                <a href="https://alphax-pi.vercel.app/" className="flex items-center gap-2 justify-center">
                  Explore the AlphaX Masterpiece Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4 - Hear It From the Students */}
        <section 
          className="relative min-h-screen flex items-center justify-start"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/3910bc10-8c2e-4985-847a-639ad0b2c05f.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl text-left">
              <h2 
                className="text-6xl md:text-6xl text-3xl font-bold mb-8"
                style={{ 
                  color: '#ffffff',
                  textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                }}
              >
                Hear It From the Students
              </h2>
              <Button 
                asChild 
                variant="outline" 
                className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[250px] md:w-[250px] w-[220px] h-[45px] text-sm md:text-sm"
                style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
              >
                <a href="https://alpha.school/#testimonials" className="flex items-center gap-2 justify-center">
                  See Student Testimonials
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