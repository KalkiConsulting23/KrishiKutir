import React from 'react'
import Nav from '../../components/Nav'
import Nav2 from '../../components/Nav2'

const HomePage = () => {
    const categories = [
  {
    icon: "leaf.png",
    title: "Leafy Greens",
    description: "Pea shoots, sunflower greens, and kale microgreens packed with nutrients",
    count: "12 varieties",
    color: "bg-growth"
  },
  {
    icon: "spice.png",
    title: "Spicy & Bold",
    description: "Radish, mustard, and arugula microgreens for an intense flavor kick",
    count: "8 varieties", 
    color: "bg-accent"
  },
  {
    icon: "mortar.png",
    title: "Culinary Herbs",
    description: "Basil, cilantro, and dill microgreens to elevate your culinary creations",
    count: "6 varieties",
    color: "bg-earth"
  },
  {
    icon: "muscles.png",
    title: "Superfood Mix",
    description: "Broccoli, red cabbage, and wheat grass - antioxidant powerhouses",
    count: "5 varieties",
    color: "bg-harvest"
  }
];
  return (
    <div>
       <Nav2/>
       <div className="hero">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img className='absolute inset-0 w-full h-full object-cover' src="microplant2.png" alt="" />
      <div className="absolute inset-0 z-0">
        {/* <img 
          src={heroImage} 
          alt="Fresh microgreens and micro plants" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          {/* <Sprout className="h-12 w-12 text-accent mr-3" /> */}
          <h1 className="text-5xl md:text-7xl text-white font-bold text-primary-foreground leading-tight">
            Fresh Microgreens
            <span className="block text-accent text-amber-300">Grown to Perfection</span>
          </h1>
        </div>
        
        <p className="text-xl text-white md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Nutrient-dense microgreens delivered fresh to your door. Packed with vitamins, 
          minerals, and intense flavors - ready to harvest in just 7-14 days.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg group"
          >
            Order Fresh Microgreens
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button> */}
          {/* <Button 
            variant="outline" 
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
          >
            Start Growing Kit
          </Button> */}
        </div>
        
        <div className="mt-12 text-white grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">25+</div>
            <div className="text-primary-foreground/80">Microgreen Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">7-14</div>
            <div className="text-primary-foreground/80">Days to Harvest</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">10K+</div>
            <div className="text-primary-foreground/80">Fresh Deliveries</div>
          </div>
        </div>
      </div>
    </section>
      <section className="categories py-20 px-6 bg-secondary/30">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Microgreen Varieties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mild and crunchy to bold and spicy, discover microgreens that match your taste
          </p>
        </div>
        
        <div className="flex justify-center items-center flex-wrap gap-8">
          {categories.map((category, index) => {
            // const Icon = category.icon;
            return (
            <div className="Cropcard min-w-1/4 h-5/10 rounded-2xl p-2 border-1">
              <div className="flex flex-col justify-center gap-5 items-center">
                <div className="icon w-20 h-20 rounded-full bg-teal-50">
                    <img src={category.icon} alt="" />
                </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground w-35 text-emerald-600">{category.description} and more..</p>
                </div>
                
                </div>   
            </div>
            );
          })}
        </div>
      </div>
    </section>
       </div>
    </div>
  )
}

export default HomePage