import Button from "@/components/Button/Button";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InformationCircleIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SEO from "@/config/SEO.json";
import data from "@/config/session.json";
import Image from "next/image";
import { useState } from "react";

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

const isDatePassed = (sessionDate: string, sessionTimeString: string): boolean => {
  const today = new Date();
  const [month, day] = sessionDate.split("/").map(Number);
  const sessionDateTime = new Date(today.getFullYear(), month - 1, day);
  
  // Get current time in hours and minutes
  const currentHours = today.getHours();
  const currentMinutes = today.getMinutes();
  const currentTime = currentHours * 60 + currentMinutes;

  // If date is different, compare dates
  if (today.getDate() !== sessionDateTime.getDate() || 
      today.getMonth() !== sessionDateTime.getMonth()) {
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
      className={`p-2 lg:p-4 rounded-md shadow-md text-white transition-all 
        ${passed ? "bg-gray-700 opacity-50" : "bg-gray-800"} 
        hover:shadow-md hover:shadow-white/50`}
    >
      {passed ? (
        <h3 className="text-sm lg:text-lg font-bold">
          <del>{session.title}</del>
        </h3>
      ) : (
        <h3 className="text-sm lg:text-lg font-bold">{session.title}</h3>
      )}
      <p className="text-xs lg:text-sm">{session.time}</p>
      <p className="text-xs lg:text-sm">{session.speakerName}</p>
      {passed && <p className="text-xs text-gray-400 mt-1 lg:mt-2">已結束</p>}
    </div>
  );
};

const Agenda: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>("all");
  const router = useRouter();
  const roomOrder: string[] = ["R2", "R0", "R1", "R3", "S"];

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
    <>
      <Head>
        <title>{SEO.Index.title}</title>
        <meta name="description" content={SEO.Index.description} />
        <meta property="og:title" content={SEO.Index.title} />
        <meta property="og:description" content={SEO.Index.description} />
        <meta property="og:image" content={SEO.Index.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com/post/${post.frontMatter.id}`} /> */}
        <meta property="og:type" content={SEO.Index.type} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content={SEO.Index.title} />
        <meta name="twitter:description" content={SEO.Index.description} />
        <meta name="twitter:image" content={SEO.Index.image} />
      </Head>
      <section className="relative z-10 pb-8 pt-10 lg:pb-32 lg:pt-28">
        <div className="text-[#d58655] text-[2.5em] font-bold text-center mb-20">
            三月份課程表
        </div>
        <div className="container px-4 lg:px-12">
          {/* Desktop View */}
          <div className="mx-auto hidden lg:grid gap-y-4 text-white">
            <div
              className="grid sticky top-0 pt-[20px] z-20 bg-[#131313]"
              style={{ gridTemplateColumns }}
            >
              <div className="py-2 pr-6 font-bold bg-[#131313]">日期</div>
              {speaker.map((speaker) => (
                <div
                  key={speaker.id}
                  className="py-2 px-5 text-center font-bold border-b border-opacity-30 bg-[#131313] flex flex-row justify-center items-center"
                >
                  <Image
                    src={speaker.avatar}
                    alt={speaker.id}
                    width="67"
                    height="67"
                    className="w-[67px] h-[67px] rounded-[20px] shadow-[#656565]"
                  />
                  <div className="px-3 text-[20px] text-[#d58655]">
                    {speaker.name}
                  </div>
                </div>
              ))}
            </div>

            {sessionsByDate.map(([date, sessions]) => (
              <div key={date} className="grid" style={{ gridTemplateColumns }}>
                <div className="py-2 pr-6 font-bold flex items-center">
                  {date}
                </div>
                {speaker.map((speaker) => (
                  <div key={speaker.id} className="p-2">
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
            <div className="sticky top-0 bg-[#131313] py-4 z-30">
              <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar">
                <button
                  onClick={() => setSelectedSpeaker("all")}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                    ${
                      selectedSpeaker === "all"
                        ? "bg-[#d58655] text-white"
                        : "bg-gray-800 text-[#d58655]"
                    }`}
                >
                  全部
                </button>
                {speaker.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSpeaker(s.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors
                      ${
                        selectedSpeaker === s.id
                          ? "bg-[#d58655] text-white"
                          : "bg-gray-800 text-[#d58655]"
                      }`}
                  >
                    <Image
                      src={s.avatar}
                      alt={s.name}
                      width="24"
                      height="24"
                      className="rounded-full"
                    />
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sessions List */}
            <div className="space-y-6 mt-4">
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
                    <h2 className="text-xl font-bold mb-4 sticky top-[88px] bg-[#131313] py-4 z-20">
                      {date}
                    </h2>
                    <div className="space-y-4">
                      {filteredSessions.map((session) => (
                        <div
                          key={session.id}
                          className={`p-4 rounded-md shadow-md transition-all
                            ${
                              isDatePassed(session.date, session.time)
                                ? "bg-gray-700 opacity-50"
                                : "bg-gray-800"
                            }
                          `}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#d58655] font-bold">
                              {
                                speaker.find((s) => s.id === session.speaker)
                                  ?.name
                              }
                            </span>
                            <span className="text-sm opacity-75">
                              {session.time}
                            </span>
                          </div>
                          <h3 className="font-bold">
                            {isDatePassed(session.date, session.time) ? (
                              <del>{session.title}</del>
                            ) : (
                              session.title
                            )}
                          </h3>
                          {isDatePassed(session.date, session.time) && (
                            <p className="text-xs text-gray-400 mt-2">已結束</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Agenda;
