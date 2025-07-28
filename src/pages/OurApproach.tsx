import Header from "@/components/Header";

const OurApproach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* First Section - Children Are Limitless */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#c2ecfd' }}>
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
            Children Are Limitless
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#ffffff' }}>
            Let us show you how Alpha School can take your child farther than they ever dreamed
          </p>
        </div>
      </section>

      {/* Second Section - 2 Hour Learning */}
      <section className="min-h-screen flex items-center px-6" style={{ backgroundColor: '#0000ef' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              2 Hour Learning
            </h2>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#ffffff' }}>
              Alpha's 2 Hour Learning model uses AI-driven, personalized instruction to help students master core subjects quickly and effectively. With targeted lessons and real-time feedback, kids close gaps faster—often outperforming national benchmarks by first grade. Human guides offer support and motivation, ensuring every student gets what they need to thrive.
            </p>
          </div>

          {/* Right Column - YouTube Video */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Hear It From Our Founder MacKenzie Price
            </h3>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dst2hGUYT28?start=484&end=534&autoplay=0"
                title="Hear It From Our Founder MacKenzie Price"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Not Magic, Learning Science */}
      <section className="min-h-screen flex items-center px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - YouTube Video */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Hear It From MacKenzie
            </h3>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dst2hGUYT28?start=534&end=687&autoplay=0"
                title="Hear It From MacKenzie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Not Magic, Learning Science
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For decades, learning science has shown us how the brain best absorbs and retains information—but most schools haven't applied it. At Alpha, we do. Our program is built on time-tested principles that make learning more efficient, engaging, and effective. Learn more from Mackenzie as she breaks down the science behind Alpha's success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurApproach;