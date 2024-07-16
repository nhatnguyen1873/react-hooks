import { useState, useEffect } from "react";

export default function Subscription({ channels }) {
  const [channelIds, setChannelIds] = useState([]);

  useEffect(() => {
    const handleNotify = ({ detail }) => {
      console.log(detail);
    };
    channelIds.forEach((channelId) =>
      window.addEventListener(`channel-${channelId}`, handleNotify)
    );

    return () => {
      channelIds.forEach((channelId) =>
        window.removeEventListener(`channel-${channelId}`, handleNotify)
      );
    };
  }, [channelIds]);

  const handleSetChannelIds = (channelId) => {
    if (channelIds.includes(channelId)) {
      setChannelIds((prevChannelIds) =>
        prevChannelIds.filter((id) => id !== channelId)
      );
    } else {
      setChannelIds((prevChannelIds) => [...prevChannelIds, channelId]);
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: 0 }}>Which channel do you want to join?</h3>
      {channels.length > 0 &&
        channels.map((channel) => (
          <div key={channel.id}>
            <input
              id={channel.id}
              type="checkbox"
              checked={channelIds.includes(channel.id)}
              onChange={() => handleSetChannelIds(channel.id)}
            />
            <label
              htmlFor={channel.id}
              style={channelIds.includes(channel.id) ? { color: "blue" } : {}}
            >
              {channel.name}
            </label>
          </div>
        ))}
    </>
  );
}
