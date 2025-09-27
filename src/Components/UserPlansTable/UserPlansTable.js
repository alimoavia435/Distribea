// src/Components/UserPlansTable/UserPlansTable.js
"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Image from "next/image";

const users = [
  {
    name: "Julien Dupont",
    email: "Julin@email.com",
    avatar: "/Images/listicon/av1.png",
    plan: "Creator",
    beginDate: "Sep 10, 2025",
    renewIn: 365,
    status: "Active",
  },
  {
    name: "AlphaWaves",
    email: "admin@alphawaves.io",
    avatar: "/Images/listicon/av2.png",
    plan: "Entreprise",
    beginDate: "Sep 10, 2025",
    renewIn: 365,
    status: "Active",
  },
  {
    name: "Marta Gonzalo",
    email: "marta@email.com",
    avatar: "/Images/listicon/av3.png",
    plan: "Creator",
    beginDate: "Sep 6, 2025",
    renewIn: 361,
    status: "Active",
  },
  {
    name: "Music Media",
    email: "music@media.net",
    avatar: "/Images/listicon/av4.png",
    plan: "Entreprise",
    beginDate: "Sep 2, 2025",
    renewIn: 357,
    status: "Active",
  },
  {
    name: "Sarah Ben",
    email: "Sarabem@gmail.com",
    avatar: "/Images/listicon/av5.png",
    plan: "Creator",
    beginDate: "Aug 29, 2025",
    renewIn: 240,
    status: "Active",
  },
  {
    name: "Julien Dupont",
    email: "Julin@email.com",
    avatar: "/Images/listicon/av6.png",
    plan: "Creator",
    beginDate: "Aug 14, 2025",
    renewIn: 12,
    status: "Active",
  },
  {
    name: "Julien Dupont",
    email: "Julin@email.com",
    avatar: "/Images/listicon/av7.png",
    plan: "Creator",
    beginDate: "Aug 1, 2025",
    renewIn: -4,
    status: "Expired",
  },
];

const getRenewClass = (days) => {
  if (days < 0) return "!text-[#EF6820]"; // expired
  if (days < 30) return "!text-[#FF383C]"; // warning
  return "!text-[#94979C]"; // normal
};

const getStatusClass = (status) => {
  switch (status) {
    case "Active":
      return "bg-[#053321] border border-[#085D3A] px-3 py-1 rounded-full text-xs font-medium text-[#75E0A7] text-center";
    case "Expired":
      return "bg-[#55160C] border border-[#912018] px-3 py-1 rounded-full text-xs font-medium text-[#FDA29B] text-center";
    default:
      return "";
  }
};

export default function UserPlansTable() {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-full">
        <TableContainer
          component={Paper}
          className="!w-full !max-w-[800px] !rounded-xl !border !border-[#22262F] !bg-[#0C0E1299] overflow-hidden overflow-x-auto scrollbar-hide"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <div className="w-full min-w-[600px]">
            <Table sx={{ minWidth: 650 }} aria-label="user plans table">
              <TableHead>
                <TableRow className="!bg-[#13161B] !border-b !border-[#22262F]">
                  {["User", "Plan", "Begin Date", "Renew in", "Status"].map(
                    (head) => (
                      <TableCell
                        key={head}
                        className="font-['Space Grotesk'] font-bold !text-[12px] !text-[#94979C] !border-b !border-[#22262F]"
                        sx={{ fontFamily: "Space Grotesk_Bold !important" }}
                      >
                        {head}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((user, idx) => (
                  <TableRow
                    key={idx}
                    className="!border-t !border-[#22262F] !text-[#94979C]"
                  >
                    {/* User column with avatar */}
                    <TableCell
                      className="!border-b !border-[#22262F]"
                      sx={{ fontFamily: "Space Grotesk !important" }}
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={user.avatar}
                          alt={user.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="!text-[#FFFFFF]">{user.name}</p>
                          <p className="!text-[#94979C] text-xs">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell
                      className="!text-[#94979C] !border-b !border-[#22262F]"
                      sx={{ fontFamily: "Space Grotesk !important" }}
                    >
                      {user.plan}
                    </TableCell>

                    <TableCell
                      className="!text-[#94979C] !border-b !border-[#22262F]"
                      sx={{ fontFamily: "Space Grotesk !important" }}
                    >
                      {user.beginDate}
                    </TableCell>

                    <TableCell
                      className={`!border-b !border-[#22262F] ${getRenewClass(
                        user.renewIn
                      )}`}
                      sx={{ fontFamily: "Space Grotesk !important" }}
                    >
                      {user.renewIn} days
                    </TableCell>

                    <TableCell
                      className="!border-b !border-[#22262F]"
                      sx={{ fontFamily: "Space Grotesk_Medium !important" }}
                    >
                      <span className={getStatusClass(user.status)}>
                        {user.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer */}
          <div className="flex justify-start p-4">
            <button
              variant="outlined"
              className="
                flex items-center justify-center 
                w-[85px] h-[36px] 
                rounded-full 
                border border-[#373A41] 
                bg-[#0C0E12] 
                shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5),0px_-2px_0px_0px_rgba(255,255,255,0.05)_inset,0px_0px_0px_1px_rgba(255,255,255,0.08)_inset]
                text-[#CECFD2]
                font-spaceGrotesk font-bold text-sm
              "
              style={{ fontFamily: "Space Grotesk_Bold" }}
            >
              Show All
            </button>
          </div>
        </TableContainer>
      </div>
    </div>
  );
}
