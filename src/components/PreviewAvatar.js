import { useState, useEffect } from "react";

export default function PreviewAvatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      if (avatar) {
        URL.revokeObjectURL(avatar.preview);
      }
    };
  }, [avatar]);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
    e.target.value = null;
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <input type="file" onChange={handleChangeAvatar} />
      {avatar && <img width={"100%"} src={avatar.preview} alt="" />}
    </div>
  );
}
