"use client";
import React, { ReactNode } from "react";
import data from "@/config/session.json";
// import timeRender from "@/app/(website)/_utils/time-render";
import sessions from "@/config/session.json";

// import { useSession } from "./AgendaContext";
import Link from "next/link";
// import { cn } from "@/lib/utils";

export type Session = {
  id: string;
  type: string;
  room: string;
  broadcast: string[] | null;
  start: string;
  end: string;
  qa: string | null;
  slide: string | null;
  co_write: string | null;
  record: string | null;
  live: string | null;
  language: string | null;
  uri: string | null;
  zh: { title: string; description: string };
  en: { title: string; description: string };
  speakers: string[];
  tags: string[];
  "": null;
};

const sessionTypes = sessions.session_types;
const allTags = sessions.tags;

const SessionCard = ({ session }: { session: Session }) => {
  // translate session.speaker[i] to data.speaker[speaker[i]].name
  const speakerNames = session.speakers.map((speakerId) => {
    const speaker = data.speakers.find((speaker) => speaker.id === speakerId);
    return speaker ? speaker.zh.name : "";
  });

  const tags = [
    ...session.tags.map(
      (tag) => allTags.find((t) => t.id === tag)?.zh.name || "",
    ),
    sessionTypes.find((type) => type.id === session.type)?.zh.name || "",
  ].filter((tag) => tag !== "");

  const calculateMinDiff = (start: string, end: string) => {
    // input format: "14:45" "15:25"
    // output format: 40
    const startHour = parseInt(start.split(":")[0]);
    const startMin = parseInt(start.split(":")[1]);
    const endHour = parseInt(end.split(":")[0]);
    const endMin = parseInt(end.split(":")[1]);
    return (endHour - startHour) * 60 + (endMin - startMin);
  };

  return (
    <CardWrapper session={session}>
      <div className="relative w-full">
        {/* {session.type} 區分不同card*/}
        {session.type === "Ev" && ( // Event or Lightning
          <div className="flex h-full w-full flex-col items-start justify-center md:items-center">
            <h3 className="font-bold md:text-normal">{session.zh.title}</h3>
          </div>
        )}
        {(session.type === "K" || session.type === "L") && ( // keynote
          <div className="flex h-full w-full flex-col items-start justify-between gap-4 md:items-center">
            <div className="flex-col items-center text-center">
              <h3 className="font-semibold md:text-normal">
                {session.zh.title}
              </h3>
              <p className="text-[14px]">{speakerNames.join(" / ")}</p>
            </div>
            <div className="">
              {tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="my-1 mr-1 rounded-xl bg-[#eceff7] p-1 text-xs text-black"
                  >
                    #{tag}
                  </span>
                );
              })}
            </div>
          </div>
        )}
        {(session.type === "E" ||
          session.type === "P" ||
          session.type === "U" ||
          session.type === "PD" ||
          session.type === "S") && ( // Espresso, Presentation, U ?, PD ?, Session
          <div className="flex h-full w-full flex-col items-start justify-between gap-4 md:items-start">
            <div>
              <h3 className="mb-2 font-semibold md:text-normal">
                {session.zh.title}
              </h3>
              <p className="text-[14px]">{speakerNames.join(" / ")}</p>
            </div>
            <div className="flex w-full items-end justify-between">
              <div className="flex flex-wrap">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="my-1 mr-1 rounded-xl bg-[#eceff7] p-1 text-xs text-black"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
              <span className="text-nowrap text-[12px] md:hidden">
                {session.broadcast ? "all rooms" : session.room} /{" "}
                {calculateMinDiff(
                  timeRender(session.start),
                  timeRender(session.end),
                )}{" "}
                min
              </span>
            </div>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

// 主要的grid layout邏輯 & 區分可否點開
const CardWrapper = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) => {
  // const { setSessionIsOpen, setOpenSessionId } = useSession();
  const roomOrder = ["R2", "R0", "R1", "R3", "S", "end"];

  const getRoom = (broadcast: string[] | null, room: string) => {
    function getNextRoom(room: string) {
      const roomIndex = roomOrder.indexOf(room);
      return roomOrder[roomIndex + 1];
    }
    if (broadcast === null) {
      const roomIndex = roomOrder.indexOf(room);
      return [room, getNextRoom(roomOrder[roomIndex])];
    }
    if (broadcast) {
      const orderedBroadcast = broadcast.sort((a, b) =>
        roomOrder.indexOf(a) > roomOrder.indexOf(b) ? 1 : -1,
      );
      return [
        orderedBroadcast[0],
        getNextRoom(orderedBroadcast[orderedBroadcast.length - 1]),
      ];
    }
    return ["", ""];
  };

  const textToStyle = (time: string) => {
    // input style format: "08:30"
    // output time format: "t0830"
    return time.replace(":", "").replace(/(\d{2})(\d{2})/, "t$1$2");
  };

  const sessionStyle = (type: string) => {
    const lightStyle =
      "bg-[#ffffff] text-black hover:opacity-80 transition-opacity";
    const darkStyle = "bg-[#2c3142] text-white";
    switch (type) {
      case "K":
        return lightStyle;
      case "E":
        return lightStyle;
      case "P":
        return lightStyle;
      case "U":
        return lightStyle;
      case "Ev":
        return darkStyle;
      case "PD":
        return lightStyle;
      case "L":
        return lightStyle;
      case "S":
        return lightStyle;
      default:
        return "";
    }
  };

  const [startRoom, endRoom] = getRoom(session.broadcast, session.room);
  const startTime = textToStyle(timeRender(session.start));
  const endTime = textToStyle(timeRender(session.end));

  const linkAbleType = ["E", "P", "U", "PD", "S", "K", "L"];
  const isLinkable =
    linkAbleType.includes(session.type) && session.zh.description.length > 0;

  return (
    <div
      className="z-10 p-2"
      key={session.id}
      style={{
        gridColumn: `${startRoom} / ${endRoom}`,
        gridRow: `${startTime} / ${endTime}`,
      }} // grid layout
    >
      <Link
        href={isLinkable ? `/agenda/${session.id}` : ""}
        scroll={false}
        className={cn({
          "cursor-pointer": isLinkable,
          "pointer-events-none": !isLinkable,
        })}
      >
        <div
          className={cn(
            "flex h-full w-full rounded-lg border border-white border-opacity-50 p-4",
            sessionStyle(session.type),
          )}
          // onClick={handleCardClick}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default SessionCard;