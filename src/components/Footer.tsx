import LogoSklair from '../imports/LogoSklair';

export function Footer() {
  return (
    <footer className="text-white py-12 md:py-16" style={{ backgroundColor: '#001A28' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Navigation Links */}
          <div>
            <h3 className="text-white mb-6 tracking-wide">NAVIGATION</h3>
            <ul className="space-y-3 text-sm" style={{ color: '#d1d5dc' }}>
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#films" className="hover:text-white transition-colors">Films</a>
              </li>
              <li>
                <a href="#steve" className="hover:text-white transition-colors">About Steve</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Working With Steve</a>
              </li>
              <li>
                <a href="#brief" className="hover:text-white transition-colors">Project Brief</a>
              </li>
            </ul>
          </div>

          {/* Equipment / Editing Section */}
          <div>
            <h3 className="text-white mb-6 tracking-wide">EQUIPMENT / EDITING</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white mb-2">CAMERAS</h4>
                <ul className="space-y-1 text-sm" style={{ color: '#d1d5dc' }}>
                  <li>Sony Z90</li>
                  <li>Panasonic GH5</li>
                  <li>OSMO Pocket Gimbal</li>
                  <li>DJI Mini 3</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-2">SOFTWARE</h4>
                <p className="text-sm" style={{ color: '#d1d5dc' }}>Final Cut Studio Pro</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white mb-6 tracking-wide">CONTACT</h3>
            <div className="space-y-2 text-sm" style={{ color: '#d1d5dc' }}>
              <p>+44 7743 671868</p>
              <p>steve_sklair@yahoo.co.uk</p>
              <p>London</p>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="text-center pt-12" style={{ borderTop: '1px solid #4a5565' }}>
          <div className="flex justify-center mb-4">
            <div className="w-40">
              <LogoSklair />
            </div>
          </div>
          <p className="text-xs" style={{ color: '#99a1af' }}>camera, editor and director</p>
          <p className="text-xs mt-4" style={{ color: '#6a7282' }}>© 2025 Steve Sklair LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}