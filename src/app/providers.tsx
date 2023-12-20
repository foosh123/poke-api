"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const TeamContext = createContext(
    {} as {
        team: string[];
        setTeam: Dispatch<SetStateAction<string[]>>;
    },
);

export function useTeamContext() {
    return useContext(TeamContext);
}

export default function Providers({ children }: { children: ReactNode }) {
    const [team, setTeam] = useState([] as string[]);
    return (
        <TeamContext.Provider
            value={{
                team,
                setTeam,
            }}
        >
            {children}
        </TeamContext.Provider>
    );
}
