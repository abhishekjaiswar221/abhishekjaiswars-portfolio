import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfilePhotoProps {
  styles?: string;
}

const ProfilePhoto: FC<ProfilePhotoProps> = ({ styles }) => {
  return (
    <Avatar className={`${styles}`}>
      <AvatarImage src="/images/profile-picture.png" alt="Profile Photo" />
      <AvatarFallback>AJ</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePhoto;
