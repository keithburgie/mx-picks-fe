import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

export default function LeaderboardHead({ headers }) {
    return (
        <thead>
            <tr>
                <th>#</th>
                {headers.map((header, index) => (
                    header.tooltip ? (
                        <OverlayTrigger key={index} overlay={<Tooltip>{header.tooltip} ({header.points}pts)</Tooltip>}>
                            <th>{header.name}</th>
                        </OverlayTrigger>
                    ) : (<th key={index}>{header.name}</th>)
                ))}
            </tr>
        </thead>
    )
}
