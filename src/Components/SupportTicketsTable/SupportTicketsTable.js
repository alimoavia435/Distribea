// src/Components/SupportTicketsTable/SupportTicketsTable.js
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
  Button,
} from "@mui/material";

const tickets = [
  {
    id: "#260",
    subject: "Issue with download",
    user: "AlphaWaves",
    role: "Entreprise",
    update: "Today",
    priority: "High",
  },
  {
    id: "#259",
    subject: "Issue with download",
    user: "Music World",
    role: "Entreprise",
    update: "Yesterday",
    priority: "Medium",
  },
  {
    id: "#258",
    subject: "Issue with subscription",
    user: "Julien dupont",
    role: "Creator",
    update: "Yesterday",
    priority: "Low",
  },
  {
    id: "#257",
    subject: "Issue with subscription",
    user: "Sarah Ben",
    role: "Creator",
    update: "2 Days",
    priority: "Low",
  },
  {
    id: "#256",
    subject: "Issue with subscription",
    user: "Marta Gonzalo",
    role: "Free",
    update: "Sep 01, 2025",
    priority: "Low",
  },
];

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
 return "bg-[#55160C] border border-[#912018] px-3 py-1 rounded-full text-xs font-medium text-[#FDA29B] text-center";

    case "Medium":
    return "bg-[#4E1D09] border border-[#93370D] px-3 py-1 rounded-full text-xs font-medium text-[#FEC84B] text-center";
    default:
       return "bg-[#062C41] border border-[#065986] px-3 py-1 rounded-full text-xs font-medium text-[#7CD4FD] text-center";
  }
};

export default function SupportTicketsTable() {
  return (
    <div className="flex justify-center p-4 ">
    <div className="flex justify-center w-full">
  <TableContainer
    component={Paper}
    className="!w-full !max-w-[800px] !rounded-xl !border !border-[#22262F] !bg-[#0C0E1299] overflow-hidden overflow-x-auto overflow-x-auto scrollbar-hide"
    sx={{ backgroundColor: "transparent", boxShadow: "none" }}
  >
    {/* Table Wrapper for responsiveness */}
    <div className="w-full min-w-[600px]">
      <Table sx={{ minWidth: 650 }} aria-label="support tickets table">
        <TableHead>
          <TableRow className="!bg-[#13161B] !border-b !border-[#22262F]">
            {["Ticket", "Subject", "User", "Last update", "Priority"].map(
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
          {tickets.map((ticket) => (
            <TableRow
              key={ticket.id}
              className="!border-t !border-[#22262F] !text-[#94979C]"
            >
              <TableCell
                className="!border-b !border-[#22262F] !text-[#94979C]"
                sx={{ fontFamily: "Space Grotesk !important" }}
              >
                {ticket.id}
              </TableCell>
              <TableCell
                className="!font-medium !text-[#FFFFFF] !border-b !border-[#22262F]"
                sx={{ fontFamily: "Space Grotesk_Medium !important" }}
              >
                {ticket.subject}
              </TableCell>
              <TableCell
                className="!border-b !border-[#22262F]"
                sx={{ fontFamily: "Space Grotesk !important" }}
              >
                <p className="!text-[#FFFFFF]">{ticket.user}</p>
                <p className="!text-[#8E8E8E] text-xs">{ticket.role}</p>
              </TableCell>
              <TableCell
                className="!text-[#8E8E8E] !border-b !border-[#22262F]"
                sx={{ fontFamily: "Space Grotesk !important" }}
              >
                {ticket.update}
              </TableCell>
              <TableCell
                className="!border-b !border-[#22262F]"
                sx={{ fontFamily: "Space Grotesk_Medium !important" }}
              >
                <span className={getPriorityClass(ticket.priority)}>
                  {ticket.priority}
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
