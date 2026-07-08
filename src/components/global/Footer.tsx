import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white px-8 py-10" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Left full height card */}
        <div className="md:col-span-2 bg-[#1B3599] rounded-3xl p-6 flex flex-col gap-20">
          <h3 className="text-3xl font-bold">
            Before you go
            <br />
            check out these links
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm text-white/80">
<li><Link href="/" className="hover:underline">Our story</Link></li>
                <li><Link href="/gallery" className="hover:underline">Media</Link></li>
                <li><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
                <li><a href="/projects" className="hover:underline">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Community Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Members</h4>
              <ul className="space-y-1 text-sm text-white/80">
                <li><a href="/team#coordinators" className="hover:underline">Co-ordinators</a></li>
                <li><a href="/team#leads" className="hover:underline">Team Leads</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Card 2 and Card 3 stacked */}
        <div className="md:col-span-1 flex flex-col justify-between gap-5">
          {/* Card 2 */}
          <div className="bg-[#1B3599] rounded-3xl p-6 md:p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let’s work together</h3>
            <ul className="space-y-2 text-sm md:text-base text-white/80">
              <li><a href="#" className="hover:underline">Sponsor a member deal</a></li>
              <li><a href="#" className="hover:underline">Apply as a member</a></li>
              <li><a href="#" className="hover:underline">Host a workshop</a></li>
              <li><a href="#" className="hover:underline">Join the team</a></li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="flex justify-between items-center gap-2">
            <a
              href="https://www.linkedin.com/company/iotlabkiit/"
              className="bg-[#1B3599] p-5 md:p-3 lg:p-7 rounded-3xl md:rounded-xl lg:rounded-3xl hover:bg-blue-700 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaLinkedin className="text-5xl sm:text-7xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://www.instagram.com/iot.lab.kiit/"
              className="bg-[#1B3599] p-5 md:p-3 lg:p-7 rounded-3xl md:rounded-xl lg:rounded-3xl hover:bg-pink-600 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram className="text-5xl sm:text-7xl md:text-4xl lg:text-5xl" />
            </a>
            <a
              href="https://x.com/iotlabkiit"
              className="bg-[#1B3599] p-5 md:p-3 lg:p-7 rounded-3xl md:rounded-xl lg:rounded-3xl hover:bg-sky-500 transition"
              target="_blank" rel="noopener noreferrer"
            >
              <FaTwitter className="text-5xl sm:text-7xl md:text-4xl lg:text-5xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-white/60 text-sm mt-8">
        Made with love by the IOT team.
      </div>
    </footer>
  );
};

export default Footer;
