import { Main } from "../Components/Main/Main";
import { SideNavigation } from "../Components/Sidebar/SideNavigation/SideNavigation/SideNavigation";
import { FetchError } from "../Components/Shared/FetchError";
import { LoadingSpinner } from "../Components/Shared/LoadingSpinner";
import { useQuery } from "react-query";
import { fetchMe } from "../API/Endpoints/fetchMe";
import { SidebarComplementaryContextProvider } from "../Components/Sidebar/SidebarComplementaryContextProvider/SidebarComplementaryContextProvider";

export const Dashboard = () => {
  const { status, data } = useQuery("me", fetchMe);
  const user = data?.data;

  if (status === "loading" || !user) return <LoadingSpinner />;
  if (status === "error") return <FetchError />;

  return (
    <SidebarComplementaryContextProvider>
      <SideNavigation userID={user.id} />
      <Main userID={user.id} />
    </SidebarComplementaryContextProvider>
  );
};
