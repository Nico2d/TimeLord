import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdPlayCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { TaskType } from "../../Types/Task.type";
import { Link, useLocation } from "react-router-dom";
import { useTime } from "../../Hooks/useTime";
import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../../API/updateTask";

type TaskProps = {
  task: TaskType;
  totalTaskTime?: number;
  handleComplete?: () => void;
  categoryColor?: string | undefined;
};

export const Task = ({
  task,
  totalTaskTime = 0,
  handleComplete,
  categoryColor,
}: TaskProps) => {
  const location = useLocation();
  const isTimerPage = location.pathname.split("/")[1] === "timer";
  const [countToSeconds, secondsToString] = useTime("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateTask, {
    onSuccess: (data) => {
      console.log("Update task [Success]:", data);
      queryClient.refetchQueries(["taskList"], { active: true });
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const clickHandler = () => {
    const body = { id: task.id, isCompleted: !task.isCompleted };
    mutate(body);

    if (handleComplete) handleComplete();
  };

  if (!isTimerPage) {
    totalTaskTime = countToSeconds(task.time);
  }

  return (
    <Container progressBar={totalTaskTime} categoryColor={categoryColor}>
      <CheckboxWrapper onClick={clickHandler}>
        {task.isCompleted ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckboxWrapper>
      <TextWrapper isCompleted={task.isCompleted}>{task.name}</TextWrapper>

      {task.isCompleted || isTimerPage ? (
        <TimeCounterWrapper>
          {secondsToString(totalTaskTime)}
        </TimeCounterWrapper>
      ) : (
        <PlayWrapper>
          <Link to={`/timer/${task.id}`}>
            <MdPlayCircleOutline />
          </Link>
        </PlayWrapper>
      )}
    </Container>
  );
};

const TimeCounterWrapper = styled.div`
  color: white;
  margin-left: auto;
  z-index: 1;
  padding-right: 10px;
  font-size: 14px;
  text-decoration: none !important;
`;

const TextWrapper = styled.p<{ isCompleted: boolean }>`
  text-align: left;
  margin: auto 0;
  font-size: 14px;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "auto")};
  z-index: 1;
`;

const CheckboxWrapper = styled.div`
  padding: 0 1rem;
  font-size: 24px;
  display: flex;
  z-index: 1;
  cursor: pointer;

  > * {
    margin: auto;
  }
`;

const PlayWrapper = styled(CheckboxWrapper)`
  color: #202020;
  margin-left: auto;
  cursor: pointer;
`;

const Container = styled.div<{ progressBar?: number; categoryColor?: string }>`
  position: relative;
  display: inline-flex;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background: #202020;
  color: white;
  align-items: center;
  margin-bottom: 0.5rem;
  overflow: hidden;
  user-select: none;

  ::before {
    content: "";
    position: absolute;
    right: -7px;
    background: ${({ categoryColor }) => categoryColor ?? "#424242"}; //#df6d6d;
    width: calc(
      80px +
        ${({ progressBar }) => (progressBar === undefined ? 0 : progressBar)}px
    );

    height: 70px;
    transform: skewX(-15deg);
    transition: width 0.5s ease-in-out;
  }
`;
