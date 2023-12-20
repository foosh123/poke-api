"use client"

import { useTeamContext } from "../providers"

export function Manage({name} : {name: string}) {
    const {team, setTeam} = useTeamContext();

    function addToTeam() {
        setTeam((s) => [...s, name])
    }

    function removeFromTeam() {
        setTeam((s) => s.filter((n) => n !== name))
    }
    
    return (
        <div>
            {team.length < 6 && !team.includes(name) && (
                <button onClick={addToTeam}>Add to Team</button>
            )}
            {team.includes(name) && <button onClick={removeFromTeam}>Remove from team</button>}
        </div>
    )
}