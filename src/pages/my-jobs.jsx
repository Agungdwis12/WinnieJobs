import CreatedApplications from "@/components/created-applications";
import CreatedJobs from "@/components/created-job";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const MyJobs = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#3b82f6" />;
  }

  return (
    <div>
      <h2 className="font-extrabold text-5xl sm:text-7xl text-center pb-8">{user?.unsafeMetadata?.role === "candidate" ? "My Applications" : "My Jobs"}</h2>
      {user?.unsafeMetadata?.role === "candidate" ? <CreatedApplications /> : <CreatedJobs />}
    </div>
  );
};

export default MyJobs;
