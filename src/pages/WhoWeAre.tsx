import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Section 1: Alpha's Three Commitments */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 
            className="text-6xl font-bold mb-8"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            Alpha's Three Commitments
          </h1>
          <p 
            className="text-xl leading-relaxed"
            style={{ 
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
            }}
          >
            Our learning is personalized, purpose-driven, and setting kids up for success in the real world
          </p>
        </div>
      </section>

      {/* Section 2: Kids Will Love School */}
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
              Kids Will Love School
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Students lead their own growth through regular feedback and one-on-one support, while exceptional guides keep them motivated with creative tools and coaching. With unique experiences like Mobile Squad field trips and in-school adventures, we design every day to spark curiosity and make school a place kids truly love.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Kids Will Learn 2X in 2 Hours */}
      <section className="relative min-h-screen bg-black flex items-center justify-end">
        <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl ml-auto text-right">
            <h2 
              className="text-6xl font-bold mb-8"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              Kids Will Learn 2X in 2 Hours
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              At Alpha, students master core subjects in just two hours a day using adaptive AI, mastery-based learning, and time-tested focus strategies. This approach leads to 2.6x average academic growth, with top students reaching up to 6.5x—consistently outperforming national benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Kids Will Learn Life Skills for the Future */}
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
              Kids Will Learn Life Skills for the Future
            </h2>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: '#ffffff',
                textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
              }}
            >
              At Alpha, students build grit, creativity, and adaptability through hands-on workshops focused on 24 essential life skills. From public speaking and coding to entrepreneurship and outdoor challenges, our experiential learning prepares them to lead, communicate, and grow with confidence—long after graduation.
            </p>
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2 w-[220px]"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
            >
              <a href="https://alpha.school/the-program/" className="flex items-center gap-2 justify-center">
                Explore the Alpha Program
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Carousel */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Slide 1: Attend a Showcase or Schedule a Tour */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-start">
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
                        Attend a Showcase or Schedule a Tour
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 2: Submit an Application Form */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-end">
                  <div className="absolute inset-0 bg-[#0000ef] bg-opacity-50"></div>
                  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl ml-auto text-right">
                      <h2 
                        className="text-6xl font-bold mb-8"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '0 4px 8px rgba(0, 0, 239, 0.5)'
                        }}
                      >
                        Submit an Application Form
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              {/* Slide 3: Attend a Shadow Day */}
              <CarouselItem>
                <div className="relative min-h-screen bg-black flex items-center justify-start">
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
                        Attend a Shadow Day
                      </h2>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="rounded-full border-white text-white bg-transparent hover:bg-[#c2ecfd] hover:text-[#0000ef] hover:border-[#0000ef] transition-all duration-200 flex items-center gap-2"
                        style={{ boxShadow: '0 4px 8px rgba(0, 0, 239, 0.5)' }}
                      >
                        <a href="https://alpha.school/admission/" className="flex items-center gap-2">
                          Let's Do It
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;