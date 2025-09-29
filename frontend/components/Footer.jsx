import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              {/* <Sprout className="h-8 w-8 text-accent mr-3" /> */}
              <h3 className="text-2xl font-bold">Krishi Kutir <span className='text-2xl text-yellow-500 font-bold'>Manager</span></h3>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Premium microgreens delivered fresh daily. From nutrient-dense pea shoots to spicy radish greens, 
              we provide the freshest microgreens to elevate your meals and boost your health.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                {/* <Mail className="h-5 w-5 text-accent mr-3" /> */}
                <span className="text-background/80">krishikutirbhopal@gmail.com</span>
              </div>
              <div className="flex items-center">
                {/* <Phone className="h-5 w-5 text-accent mr-3" /> */}
                <span className="text-background/80">+91 9009166101</span>
              </div>
              <div className="flex items-center">
                {/* <MapPin className="h-5 w-5 text-accent mr-3" /> */}
                <span className="text-background/80">Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Fresh Microgreens</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Growing Kits</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Recipe Ideas</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Subscription</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Delivery Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Freshness Guarantee</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Commercial Orders</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Krishi Kutir Co. All rights reserved. | Made with ❤️ for microgreen lovers
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer