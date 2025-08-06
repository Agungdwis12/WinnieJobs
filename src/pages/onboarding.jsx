import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

const Onboarding = () => {
  const {user, isLoaded} = useUser();
  const navigate = useNavigate()

  const handleRoleSelection = async(role)=>{
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === "recruiter" ? "/post-job" : "/jobs");
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(()=>{
    if(user?.unsafeMetadata?.role){
      navigate(user?.unsafeMetadata.role === "recruiter" ? "/post-job" : "/jobs")
    }
  },[])

  if(!isLoaded){
    return <BarLoader className="mb-4" width={"100%"} color="#3b82f6" />;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-32 px-4">
      <h2 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter text-center">I am a...</h2>

      <p className="mt-2 text-gray-400 text-lg sm:text-xl text-center">Silakan pilih peran Anda.</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <Button variant="blue" className="h-20 sm:h-28 text-xl sm:text-2xl rounded-xl shadow-lg hover:scale-105 transition-transform" onClick={() => handleRoleSelection("candidate")}>
          Candidate
        </Button>
        <Button variant="pink" className="h-20 sm:h-28 text-xl sm:text-2xl rounded-xl shadow-lg hover:scale-105 transition-transform" onClick={() => handleRoleSelection("recruiter")}>
          Recruiter
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
