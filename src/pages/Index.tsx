import Header from "@/components/Header";
import { useState, useEffect } from "react";

const Index = () => {
  const [videosLoaded, setVideosLoaded] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const totalVideos = 5;

  const handleVideoLoad = () => {
    setVideosLoaded(prev => {
      const newCount = prev + 1;
      if (newCount === totalVideos) {
        setTimeout(() => setShowLoading(false), 500); // Small delay for smooth transition
      }
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Loading Screen */}
      {showLoading && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ backgroundColor: '#0000ef' }}
        >
          <img 
            src="/lovable-uploads/37666bfc-8887-4e05-b9c5-99a30f5daa7e.png"
            alt="Alpha School Logo"
            className="w-64 h-64 object-contain mb-8"
          />
          <h1 
            className="text-4xl font-bold text-center"
            style={{ color: '#ffffff' }}
          >
            Welcome to Alpha School
          </h1>
        </div>
      )}

      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </section>

        {/* Section 2 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/4 Sailing.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </section>

        {/* Section 3 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </section>

        {/* Section 4 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/4 Sailing.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </section>

        {/* Section 5 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoad}
          />
        </section>
      </main>
    </div>
  );
};

export default Index;
