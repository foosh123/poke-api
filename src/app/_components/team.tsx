"use client"

import { useTeamContext } from "../providers"

export function Team() {
    const ctx = useTeamContext()
    return (
        <div className="fixed top-20 right-20 p-4 bg-black text-white">
            <p>Team</p>
            {ctx.team.map((name) => (
                <p key={name}>{name}</p>
            ))}
        </div>
    )
}