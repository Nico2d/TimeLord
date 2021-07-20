import { RowItem } from "../RowItem/RowItem";
import * as Styled from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";
import defaultUser from "../../../../Assets/default_user.png";

export const Avatar = ({ src, username, isHidden }: AvatarProps) => {
  const addDefaultSrc = (ev: any) => {
    ev.target.src = defaultUser;
  };

  return (
    <Styled.AvatarContainer>
      {isHidden ? (
        <RowItem
          icon={<Styled.Avatar src={src} onError={addDefaultSrc} />}
          text={username}
          isHidden={isHidden}
        />
      ) : (
        <>
          <Styled.Avatar
            src={src}
            onError={addDefaultSrc}
            width="100px"
            height="100px"
          />
          <Styled.Title>Witaj {username}!</Styled.Title>
        </>
      )}
    </Styled.AvatarContainer>
  );
};
