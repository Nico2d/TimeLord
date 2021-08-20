import { MdAdd, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTaskList } from "../../../../API/Hooks/useTaskList";
import { useTime } from "../../../../Hooks/useTime";
import { Sidebar } from "../../Sidebar/Sidebar";
import { RowItem } from "../../SideNavigation/RowItem/RowItem";
import { DailyProgressCircle } from "../DailyProgressCircle/DailyProgressCircle";
import * as Styled from "./SidebarComplementary.styled";

interface ISidebarComplementaryProps {
  projectID?: string;
}

export const SidebarComplementary = ({
  projectID = "",
}: ISidebarComplementaryProps) => {
  const { taskList, permissionUserList } = useTaskList(projectID);
  const { countToSeconds, secondsToString } = useTime();

  const getSumTimeOfAllTaskList = () => {
    return taskList.reduce(
      (totalTime, task) => totalTime + countToSeconds(task.time),
      0
    );
  };

  return (
    <Sidebar position="right" width="250px">
      <DailyProgressCircle />
      <Styled.SidebarParagraph>
        W tym tygodniu wykonałeś <b>18</b> zadań
      </Styled.SidebarParagraph>

      {projectID !== "" && (
        <Styled.Section>
          <h4>Projekt</h4>
          <Styled.SidebarParagraph>
            Całkowity czas spędzony nad projektem:{" "}
            <b>{secondsToString(getSumTimeOfAllTaskList())}</b>
          </Styled.SidebarParagraph>

          <h5>Osoby w projekcie:</h5>
          <Styled.SidebarParagraph>
            <RowItem text="Dodaj osobę" icon={<MdAdd />} />
            {permissionUserList.map((user) => {
              return <RowItem text={user.username} icon={<MdPerson />} />;
            })}
          </Styled.SidebarParagraph>
        </Styled.Section>
      )}

      <Link to="/statistics"> Więcej statystyk</Link>
      <Styled.Whitespace />
    </Sidebar>
  );
};
