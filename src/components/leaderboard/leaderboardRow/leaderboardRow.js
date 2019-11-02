import React from 'react'

export default function LeaderboardRow({ user, rank }) {
    return (
        <tr>
            <td>{rank}</td>
            <td>{user.name}</td>
            <td>{user.points}</td>
            <td>{user.correctPicks}</td>
            <td>{user.off1}</td>
            <td>{user.off2}</td>
            <td>{user.off3}</td>
            <td>{user.holeshots}</td>
            <td>{user.missedPicks}</td>
        </tr>
    )
}
