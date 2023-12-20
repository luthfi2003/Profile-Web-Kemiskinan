"use client"

import Chart from "@/app/profile/Chart"
import React from "react"
import SectionProfile from "./Section"

const Profile = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #01003C 0%, rgba(1, 0, 63, 0.92) 0.01%, rgba(1, 0, 73, 0.65) 99.34%)",
      }}
    >
      <Chart />
      <SectionProfile />
    </div>
  )
}

export default Profile
