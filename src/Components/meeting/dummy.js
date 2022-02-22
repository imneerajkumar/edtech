import React, { useEffect, useState } from "react";

import { AgoraVideoPlayer } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk";

import { Controls } from "./controller";
const config = { mode: "rtc", codec: "vp8" };

// const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// const token =
// 	"006ee4400d8057c4dfb8f3cf30264db4011IADNEBJ2h2p7LmieonfMTc1D6mfffBV7E5xmtFSr9bZKOQx+f9gAAAAAEADzxwcSAcsTYgEAAQAEyxNi";
const Video = ({
	sessionId,
	inCall,
	useClient,
	appId,
	token,
	setInCall,
	channelName,
	useMicrophoneAndCameraTracks,
}) => {
	const client = useClient();
	const { ready, tracks } = useMicrophoneAndCameraTracks();
	const [users, setUsers] = useState([]);
	const [start, setStart] = useState(false);

	useEffect(() => {
		// function to initialise the SDK
		const init = async (name) => {
			client.on("user-published", async (user, mediaType) => {
				await client.subscribe(user, mediaType);
				console.log("subscribe success");
				if (mediaType === "video") {
					setUsers((prevUsers) => {
						return [user];
					});
					console.log(users);
				}
				if (mediaType === "audio" && user) {
					user.audioTrack?.play();
				}
			});

			client.on("user-unpublished", (user, type) => {
				console.log("unpublished", user, type);
				if (type === "audio") {
					user.audioTrack?.stop();
				}
				if (type === "video") {
					setUsers((prevUsers) => {
						return prevUsers.filter((User) => User.uid !== user.uid);
					});
				}
			});

			client.on("user-left", (user) => {
				console.log("leaving", user);
				setUsers((prevUsers) => {
					return prevUsers.filter((User) => User.uid !== user.uid);
				});
			});

			await client.join(null, name, null, null);
			if (tracks) await client.publish([tracks[0], tracks[1]]);
			setStart(true);
		};
		if (ready && tracks) {
			console.log("init ready");
			init(channelName);
		}
	}, [channelName, ready, tracks, client, users, appId, token]);
	return (
		<div>
			{inCall && tracks && (
				<AgoraVideoPlayer
					videoTrack={tracks[1]}
					style={{
						height: "100vh",
						width: "100vw",
						// zIndex: -1,
						position: "absolute",
						top: 0,
						left: 0,
					}}
				>
					{ready && tracks && (
						<Controls
							tracks={tracks}
							setStart={setStart}
							setInCall={setInCall}
							client={client}
							sessionId={sessionId}
							// history={history}
							//   generateReport={generateReport}
						/>
					)}
					{users.length > 0 &&
						users.map((user, i) => {
							console.log(users);
							return (
								<AgoraVideoPlayer
									key={user.uid}
									videoTrack={user.videoTrack}
									style={{
										height: "30%",
										width: "320px",
										zIndex: 2,
										position: "absolute",
										bottom: "10%",
										right: 0,
									}}
								/>
							);
						})}
				</AgoraVideoPlayer>
			)}
		</div>
	);
};

export default Video;
