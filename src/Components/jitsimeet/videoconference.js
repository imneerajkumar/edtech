import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";
import {useNavigate} from 'react-router-dom'
import "./videoconference.css";
function JitsiMeetComponent() {
	const navigate=useNavigate()
	const [loading, setLoading] = useState(false);
	const containerStyle = {
		width: "100vw",
		height: "100vh",
		padding: 0,
		margin: 0,
		backgroundColor: "#333",
	};

	const jitsiContainerStyle = {
		display: loading ? "none" : "block",
		width: "100%",
		height: "100%",
	};

	function startConference() {
		try {
			const domain = "meet.jit.si";
			const options = {
				roomName: "roomName",
				// height: ,
				parentNode: document.getElementById("jitsi-container"),
				interfaceConfigOverwrite: {
					filmStripOnly: false,

					// TOOLBOX_ENABLED: false,
				},
				configOverwrite: {
					SHOW_JITSI_WATERMARK: false,
					SHOW_PROMOTIONAL_CLOSE_PAGE: false,
					enableClosePage: false,
					enableWelcomePage: false,
					disableSimulcast: true,
					toolbarButtons: [
						"microphone",
						"camera",
						"desktop",
						"hangup",
						"chat",
						"recording",
						"settings",
					],
						prejoinPageEnabled: false,
				},
				// configOverwrite: {
				// 	toolbarButtons: [
				// 		// "microphone",
				// 		"closedcaptions",
				// 		"embedmeeting",
				// 		"fullscreen",
				// 		"fodeviceselection",
				// 		"profile",
				// 		"chat",
				// 		"recording",
				// 		"livestreaming",
				// 		"etherpad",
				// 		"sharedvideo",
				// 		// "settings",
				// 		"raisehand",
				// 		"videoquality",
				// 		"filmstrip",
				// 		// "feedback",
				// 		"stats",
				// 		"shortcuts",
				// 		"tileview",
				// 		"select-background",
				// 		"download",
				// 		"help",
				// 		"mute-everyone",
				// 		"mute-video-everyone",
				// 	],
				// 	prejoinPageEnabled: false,
				// 	channelLastN: 4,
				// 	startWithAudioMuted: true,
				// 	startWithVideoMuted: true,
				// },
			};

			const api = new window.exports.JitsiMeetExternalAPI(domain, options);
			api.addEventListener("videoConferenceJoined", () => {
				console.log("Local User Joined");
				setLoading(false);
				api.executeCommand("displayName", "MyName");
			});
            api.addEventListener("readyToClose", function () {
							//Remove from db
							navigate("/")
						});
		} catch (error) {
			console.error("Failed to load Jitsi API", error);
		}
	}

	useEffect(() => {
		// verify the JitsiMeetExternalAPI constructor is added to the global..
		if (window.exports.JitsiMeetExternalAPI) startConference();
		else alert("Jitsi Meet API script not loaded");
	}, []);

	return (
		<div style={containerStyle}>
			{loading && <ProgressComponent />}
			<div id="jitsi-container" style={jitsiContainerStyle} />
			{/* <iframe
				title="ge"
				allow="camera; microphone; fullscreen; display-capture; autoplay"
				src="https://meet.jit.si/jay"
				style={{ height: " 100%", width: "100%", border: 0 }}
			></iframe> */}
		</div>
	);
}

export default JitsiMeetComponent;
