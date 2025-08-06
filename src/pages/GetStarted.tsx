import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1: The Future of Education is Now */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/0271493c-e25b-41ef-8657-b4a32e7bbc8e.png)' }}
      >
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 
            className="text-6xl md:text-6xl text-3xl font-bold mb-8"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            The Future of Education is Now
          </h1>
          <p 
            className="text-xl md:text-xl text-sm leading-relaxed"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            We're excited to go on this journey with you
          </p>
        </div>
      </section>

      {/* Section 2: Send Your Kid to Alpha School */}
      <section 
        className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/1ae8579d-981c-4c0e-a5d2-cd2e1e089bf1.png)' }}
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
              Send Your Kid to Alpha School
            </h2>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[150px] md:w-[150px] w-[130px] h-[40px] md:h-auto text-sm md:text-sm"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://alpha.school/admission-forms/" className="flex items-center gap-2 justify-center">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Bring Alpha to Your City */}
      <section 
        className="relative min-h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/8482d6a6-1b6a-4982-b1cb-376ca7cf269b.png)' }}
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
              Bring Alpha to Your City
            </h2>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[150px] md:w-[150px] w-[130px] h-[40px] md:h-auto text-sm md:text-sm ml-auto"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://alpha.school/bring-alpha-to-your-city/" className="flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Work for Alpha School */}
      <section 
        className="relative min-h-screen flex items-center justify-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/61e1938e-c523-4547-8c45-3452c80d54d7.png)' }}
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
              Work for Alpha School
            </h2>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[180px] md:w-[180px] w-[150px] h-[40px] md:h-auto text-sm md:text-sm"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://www.crossover.com/jobs" className="flex items-center gap-2 justify-center">
                Explore Careers
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Connect With Our School */}
      <section 
        className="relative min-h-screen flex items-center justify-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/e2e56fb7-860d-4def-bcc9-feb14f5fb727.png)' }}
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
              Connect With Our School
            </h2>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[160px] md:w-[160px] w-[140px] h-[40px] md:h-auto text-sm md:text-sm ml-auto"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://alpha.school/learn-more/" className="flex items-center gap-2 justify-center">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;