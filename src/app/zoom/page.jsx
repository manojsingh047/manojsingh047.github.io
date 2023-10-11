// app/page.jsx

"use client"
// import './../../styles/globals.css';
import { useEffect, useState } from "react";

export default function ZoomMeeting() {
    const [meetingId, setMeetingId] = useState("");
    const [meetingPass, setMeetingPass] = useState("");
    return (
        <div className="App" style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <main>
                <h1>Zoom Meeting SDK Sample React</h1>
                <br />
                <h1>Join Manoj's meeting</h1>

                {/* For Component View */}
                <div id="meetingSDKElement">
                    {/* Zoom Meeting SDK Component View Rendered Here */}
                </div>

                <button onClick={() => initZoomApp()}>Join meeting</button>
            </main>
        </div>)
}

async function initZoomApp(meetingId = "8927709022", meetingPass = "manoj123") {
    const { client, clientConf } = await initClient(meetingId, meetingPass);
    startMeeting(client, clientConf);
}

async function initClient(meetingId, meetingPass) {
    const ZoomMtgEmbedded = await (await import('@zoomus/websdk/embedded')).default;
    const client = ZoomMtgEmbedded.createClient();

    const clientConf = {
        authEndpoint: "",
        sdkKey: "ueDDUoqPQrAnoWXKBgaeA",
        signature: "",
        meetingNumber: meetingId, // actual meeting number: user need to input
        passWord: meetingPass, // actual password for the meeting: user need to input
        role: 0, // 0 implies client, 1 implies host
        userName: 'React', // username: user need to input
        userEmail: '' // user email: user need to input
    }

    //   var authEndpoint = "http://localhost:4000";
    //   var sdkKey = "ueDDUoqPQrAnoWXKBgaeA";
    //   var meetingNumber = "8927709022";
    //   var passWord = "manoj123";
    //   var role = 0;
    //   var userName = "React";
    //   var userEmail = "";
    //   var registrantToken = "";
    //   var zakToken = "";


    // fetch signature to your auth endpoint. Check the sample repo.
    // https://github.com/zoom/meetingsdk-auth-endpoint-sample
    const { signature } = await getSignature(clientConf.meetingNumber, clientConf.role);
    clientConf.signature = signature;

    const meetingSDKElement = document.getElementById('meetingSDKElement');
    client.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        language: 'en-US',
        customize: {
            meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
            toolbar: {
                buttons: [
                    {
                        text: 'Custom Button',
                        className: 'CustomButton',
                        onClick: () => {
                            console.log('Hi, mom');
                        }
                    }
                ]
            }
        }
    });

    return { client: client, clientConf: clientConf };
}

// fetch signature to your auth endpoint. Check the sample repo.
// https://github.com/zoom/meetingsdk-auth-endpoint-sample 
async function getSignature(meetingNumber, role) {
    //   const data = await fetch(process.env.NEXT_PUBLIC_AUTH_ENDPOINT, {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       meetingNumber: meetingNumber,
    //       role: role
    //     })
    //   })
    //   const { data: signature } = await data.json();
    //   const { data: signature } = await data.json();
    //   return signature;
    return {
        "signature": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJ1ZUREVW9xUFFyQW5vV1hLQmdhZUEiLCJtbiI6Ijg5Mjc3MDkwMjIiLCJyb2xlIjowLCJpYXQiOjE2OTcwMjUzNDgsImV4cCI6MTY5NzAzMjU0OCwiYXBwS2V5IjoidWVERFVvcVBRckFub1dYS0JnYWVBIiwidG9rZW5FeHAiOjMyNTIyMjUzNDh9.YRiZ-9PzWbcJ4M1IMXBkHXZ1dm8sIZozNevMK8Xcr0c"
    };
}

function startMeeting(client, clientConf) {
    client.join({
        signature: clientConf.signature,
        sdkKey: clientConf.sdkKey,
        meetingNumber: clientConf.meetingNumber,
        password: clientConf.passWord,
        userName: clientConf.userName,
        userEmail: clientConf.userEmail,
    })
}