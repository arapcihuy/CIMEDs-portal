import { Linkedin, Mail } from "lucide-react";
import scientistImg from "@assets/stock_images/scientist_researcher_27355681.jpg";

const researchers = [
  {
    name: "Dr. Suyitno, S.T., M.Sc.",
    role: "Kepala Pusat Riset",
    expertise: "Biomaterials & Biomechanics",
    image: scientistImg,
    linkedin: "#"
  },
  {
    name: "Dr. Urip Agus Salim",
    role: "Koordinator Manufaktur",
    expertise: "Medical Device Design",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    name: "Dr. Budi Arifvianto",
    role: "Peneliti Senior",
    expertise: "Surface Engineering",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    name: "Dr. Muslim Mahardika",
    role: "Peneliti Senior",
    expertise: "Precision Machining",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
    linkedin: "#"
  }
];

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {researchers.map((person, idx) => (
        <div key={idx} className="group text-center">
          <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
          <p className="text-primary font-medium text-sm mb-2">{person.role}</p>
          <p className="text-gray-500 text-sm mb-4">{person.expertise}</p>
          <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <a href={person.linkedin} className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
