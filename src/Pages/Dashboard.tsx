import { Main } from "../Components/Main/Main";
import { SideNavigation } from "../Components/Sidebar/SideNavigation/SideNavigation/SideNavigation";
import { SidebarComplementaryContextProvider } from "../Components/Sidebar/SidebarComplementaryContextProvider/SidebarComplementaryContextProvider";
import { UserContextProvider } from "../Providers/UserContextProvider";
import { useQuery } from "react-query";
import { fetchMe } from "../API/Endpoints/fetchMe";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { FetchError } from "../Components/Shared/FetchError";

export const Dashboard = () => {
  const { status, data } = useQuery("me", fetchMe);
  const user = data?.data;

  if (status === "loading" || !user)
    return <LoadingSpinner size={100} absoluteCenter={true} />;
  if (status === "error") return <FetchError />;

  return (
    <UserContextProvider userId={user.id}>
      <SidebarComplementaryContextProvider>
        <SideNavigation />
        <Main />
      </SidebarComplementaryContextProvider>
    </UserContextProvider>
  );
};
