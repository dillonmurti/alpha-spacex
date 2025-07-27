import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/5 School Launch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Section 2 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/4 Sailing.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/4 Sailing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Section 3 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/5 School Launch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Section 4 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/4 Sailing.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/4 Sailing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Section 5 */}
        <section className="h-screen relative overflow-hidden">
          <video 
            src="/5 School Launch.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/5 School Launch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </main>
    </div>
  );
};

export default Index;
