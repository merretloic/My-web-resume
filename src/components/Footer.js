import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-8">
      <div className="text-center space-y-2">
        {/* Coordonnées */}
        <p className="text-lg">📍 Bordeaux, France</p>
        <p className="text-lg">📧 Loic.merret@enseirb-matmeca.fr / 📧
          loicmerret1@gmail.com
        </p>
        <p className="text-lg">📞 +33 6 52 79 49 53</p>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/loic-merret-5b155124b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/merretloic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

