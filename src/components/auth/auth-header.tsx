//Libraries
import React from "react";

//Hooks
import { useNavigate } from "react-router-dom";

interface AuthHeaderProps {
  login: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ login }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-3 pb-8">
      <div className="w-full flex justify-end">
        <div className="flex items-center space-x-3 mr-4 mb-7">
          <p className="text-white ">
            {login ? "Pas encore de compte ?" : "Déja inscrit ?"}
          </p>
          <button
            onClick={login ? () => navigate("/setup-profile") : () => navigate("/login")}
            className="bg-blue-600 bg-opacity-70 p-1 px-4  rounded-lg text-white"
          >
            {login ? "S'inscrire" : "Se connecter"}
          </button>
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col">
        <p className="text-white text-4xl font-extrabold mb-5">LYKIN</p>
        <p className="text-white text-base">La gestion d'appart simplifié</p>
      </div>
    </div>
  );
};

export default AuthHeader;
