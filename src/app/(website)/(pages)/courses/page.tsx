"use client";

import Head from "next/head";
import Link from "next/link";
import SEO from "@/config/SEO.json";
import data from "@/config/session.json";
import Image from "next/image";
import { useState, useEffect } from "react";

// Types
import { Speaker } from "@/types/Card/Speaker";
import { Session } from "@/types/Card/Session";

const styleToText = (date: string): string => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const formatDateLabel = (date: string): string => {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" });
};

const groupSessionsByDate = (sessions: Session[]) => {
  const groups = new Map<string, Session[]>();

  sessions.forEach((session) => {
    const dateKey = formatDateLabel(session.date);
    if (!groups.has(dateKey)) {
      groups.set(dateKey, []);
    }
    groups.get(dateKey)?.push(session);
  });

  return Array.from(groups.entries()).sort();
};

const isDatePassed = (
  sessionDate: string,
  sessionTimeString: string
): boolean => {
  const today = new Date();
  const [month, day] = sessionDate.split("/").map(Number);
  const sessionDateTime = new Date(today.getFullYear(), month - 1, day);

  // Get current time in hours and minutes
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const currentTime = currentHours * 60 + currentMinutes;

  // If date is different, compare dates
  if (
    today.getDate() !== sessionDateTime.getDate() ||
    today.getMonth() !== sessionDateTime.getMonth()
  ) {
    return today > sessionDateTime;
  }

  // If same date, compare time
  const [sessionTimeStr] = sessionTimeString.split("-");
  const [hours, minutes] = sessionTimeStr.split(":").map(Number);
  const sessionTime = hours * 60 + minutes;

  return currentTime > sessionTime;
};

const SessionCard: React.FC<{ session: Session; date: String }> = ({
  session,
  date,
}) => {
  const passed = isDatePassed(session.date, session.time);

  return (
    <div
      className={`p-3 lg:p-4 rounded-xl shadow-md text-white transition-all duration-300 border-l-4
        ${
          passed
            ? "bg-gray-800/80 opacity-60 border-gray-600"
            : "bg-gradient-to-br from-gray-800 to-gray-900 border-[#d58655]"
        } 
        hover:shadow-lg hover:shadow-[#d58655]/20 transform hover:-translate-y-1`}
    >
      {passed ? (
        <h3 className="text-sm lg:text-base font-bold text-gray-300">
          <del>{session.title}</del>
        </h3>
      ) : (
        <h3 className="text-sm lg:text-base font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {session.title}
        </h3>
      )}
      <div className="flex items-center mt-2">
        <div className="bg-[#d58655]/20 rounded-md px-2 py-1 text-xs text-[#d58655]">
          {session.time}
        </div>
      </div>
      <p className="text-xs mt-2 text-gray-300">
        {session.speakerName}
      </p>
      {passed && (
        <div className="flex justify-end mt-2">
          <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-md">
            已結束
          </span>
        </div>
      )}
    </div>
  );
};

const Agenda: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>("all");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const roomOrder: string[] = ["R2", "R0", "R1", "R3", "S"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const speaker: Speaker[] = data.speaker.sort((a: Speaker, b: Speaker) => {
    return roomOrder.indexOf(a.id) - roomOrder.indexOf(b.id);
  });

  const gridTemplateColumns: string = speaker.reduce((acc, room) => {
    return `${acc} [${room.id}] 1fr `;
  }, "[start] auto");

  const sessionsByDate = groupSessionsByDate(data.sessions);

  function getNextRoom(room: string): string {
    const roomIndex = roomOrder.indexOf(room);
    return roomOrder[roomIndex + 1] || "end";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#131313] to-[#1c1c1c] pb-16 mb-3.5">
      {/* Top gradient line */}
      <div className="bg-gradient-to-r from-[#d58655] to-[#e0a47a] h-[3px]"></div>
      
      {/* Header with title */}
      <div className="relative mt-20 my-12">
        <div className="bg-gradient-to-r from-[#d58655] to-[#e0a47a] w-48 md:w-64 mx-auto rounded-lg shadow-md overflow-hidden">
          <div className="text-lg md:text-2xl font-medium py-2 text-center text-white">
            三月份課程表
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div>
          {/* Desktop View */}
          <div className="mx-auto hidden lg:grid gap-y-4 text-white">
            <div
              className={`grid sticky top-0 z-20 transition-all duration-300 ${
                isScrolled
                  ? "py-2 bg-[#131313]/95 backdrop-blur-sm shadow-md"
                  : "pt-[12px] bg-transparent"
              }`}
              style={{ gridTemplateColumns }}
            >
              <div className="py-2 pr-4 font-medium bg-transparent text-base">
                日期
              </div>
              {speaker.map((speaker) => (
                <div
                  key={speaker.id}
                  className="py-2 px-3 text-center font-medium border-b border-[#d58655]/20 flex flex-col justify-center items-center gap-2"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#d58655] to-[#e0a47a] rounded-2xl opacity-60 group-hover:opacity-100 blur-sm transition duration-200"></div>
                    <div className="relative">
                      <Image
                        src={speaker.avatar}
                        alt={speaker.id}
                        width="56"
                        height="56"
                        className="w-14 h-14 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="text-base font-medium text-[#d58655]">
                    {speaker.name}
                  </div>
                </div>
              ))}
            </div>

            {sessionsByDate.map(([date, sessions]) => (
              <div
                key={date}
                className="grid relative"
                style={{ gridTemplateColumns }}
              >
                <div className="py-2 pr-4 font-medium flex items-center bg-gray-900/20 rounded-l-md text-base">
                  <div className="ml-2 bg-[#d58655] text-white px-3 py-1 rounded-md shadow-md">
                    {date}
                  </div>
                </div>
                {speaker.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="p-2 bg-gray-900/10 last:rounded-r-md"
                  >
                    {sessions
                      .filter((session) => session.speaker === speaker.id)
                      .map((session) => (
                        <SessionCard
                          key={session.id}
                          session={session}
                          date={session.date}
                        />
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden text-white">
            {/* Speaker Selection */}
            <div
              className={`sticky top-0 z-30 transition-all duration-300 ${
                isScrolled
                  ? "py-2 bg-[#131313]/95 backdrop-blur-sm shadow-md"
                  : "py-3 bg-[#131313]"
              }`}
            >
              <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar px-2">
                <button
                  onClick={() => setSelectedSpeaker("all")}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium
                    ${
                      selectedSpeaker === "all"
                        ? "bg-gradient-to-r from-[#d58655] to-[#e0a47a] text-white shadow-md shadow-[#d58655]/20"
                        : "bg-gray-800 text-[#d58655]"
                    }`}
                >
                  全部
                </button>
                {speaker.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpeaker(s.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap transition-all duration-300 text-sm font-medium
                      ${
                        selectedSpeaker === s.id
                          ? "bg-gradient-to-r from-[#d58655] to-[#e0a47a] text-white shadow-md shadow-[#d58655]/20"
                          : "bg-gray-800 text-[#d58655]"
                      }`}
                  >
                    <div className="relative w-5 h-5 overflow-hidden rounded-full">
                      <Image
                        src={s.avatar}
                        alt={s.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sessions List */}
            <div className="space-y-6 mt-4 px-2">
              {sessionsByDate.map(([date, sessions]) => {
                const filteredSessions =
                  selectedSpeaker === "all"
                    ? sessions
                    : sessions.filter(
                        (session) => session.speaker === selectedSpeaker
                      );

                if (filteredSessions.length === 0) return null;

                return (
                  <div key={date}>
                    <div
                      className={`sticky top-[72px] z-20 transition-all duration-300 ${
                        isScrolled
                          ? "py-2 bg-[#131313]/95 backdrop-blur-sm"
                          : "py-3 bg-[#131313]"
                      }`}
                    >
                      <div className="inline-block bg-[#d58655] text-white px-3 py-1 rounded-md font-medium text-base">
                        {date}
                      </div>
                    </div>
                    <div className="space-y-3 mt-3">
                      {filteredSessions.map((session) => {
                        const isPassed = isDatePassed(
                          session.date,
                          session.time
                        );
                        const speakerInfo = speaker.find(
                          (s) => s.id === session.speaker
                        );

                        return (
                          <div
                            key={session.id}
                            className={`p-3 rounded-lg shadow-md transition-all duration-300 border-l-4
                              ${
                                isPassed
                                  ? "bg-gray-800/80 opacity-60 border-gray-600"
                                  : "bg-gradient-to-br from-gray-800 to-gray-900 border-[#d58655]"
                              }
                            `}
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 mt-1">
                                <Image
                                  src={speakerInfo?.avatar || ""}
                                  alt={speakerInfo?.name || ""}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-[#d58655] font-medium block text-sm">
                                  {speakerInfo?.name}
                                </span>
                                <span className="text-xs bg-[#d58655]/20 rounded-md px-2 py-0.5 inline-block text-[#d58655] mt-1">
                                  {session.time}
                                </span>
                              </div>
                            </div>
                            <h3
                              className={`font-medium text-base ${
                                isPassed
                                  ? "text-gray-400"
                                  : "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                              }`}
                            >
                              {isPassed ? (
                                <del>{session.title}</del>
                              ) : (
                                session.title
                              )}
                            </h3>
                            {isPassed && (
                              <div className="flex justify-end mt-2">
                                <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded-md">
                                  已結束
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;