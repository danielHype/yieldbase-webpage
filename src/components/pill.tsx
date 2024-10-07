import { Button } from './form/button'
import Link from 'next/link'
import React from 'react'

export default function AnnouncementPill() {
    return (
        <Link href="/updates/early-adopter">
            <Button
                variant="outline"
                className="rounded-full border-border flex space-x-2 items-center"
            >
                <span>Announcing Early Adopters Plan</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="none"
                >
                    <path
                        fill="currentColor"
                        d="M8.783 6.667H.667V5.333h8.116L5.05 1.6 6 .667 11.333 6 6 11.333l-.95-.933 3.733-3.733Z"
                    />
                </svg>
            </Button>
        </Link>
    )
}

