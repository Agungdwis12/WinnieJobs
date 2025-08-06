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
      <h2 className="font-extrabold text-4xl sm:text-5xl text-center pb-2">{user?.unsafeMetadata?.role === "candidate" ? "My Applications" : "My Jobs"}</h2>

      <p className="text-gray-400 text-lg sm:text-xl text-center mb-8">
        {user?.unsafeMetadata?.role === "candidate" ? "Lihat dan pantau semua lowongan yang sudah Anda lamar." : "Kelola dan pantau semua lowongan pekerjaan yang telah Anda posting."}
      </p>

      {user?.unsafeMetadata?.role === "candidate" ? <CreatedApplications /> : <CreatedJobs />}
    </div>
  );
};

export default MyJobs;
