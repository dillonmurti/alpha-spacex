import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Test Section */}
      <section className="h-screen bg-red-500 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl mb-4">Video Test</h1>
          <video 
            src="/5 School Launch.mp4"
            controls
            width="400"
            height="300"
            className="bg-blue-500"
            onLoadedData={() => console.log('Video loaded successfully')}
            onError={(e) => console.error('Video error:', (e.target as HTMLVideoElement).error)}
          >
            <source src="/5 School Launch.mp4" type="video/mp4" />
            Video not supported
          </video>
          <p className="mt-4">If you see video controls above, the file works.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
