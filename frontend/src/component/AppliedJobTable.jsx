import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

function AppliedJobTable() {
  return (
    <Table>
      <TableCaption className="font-semibold text-2xl">
        A list of your applied jobs.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 2, 3, 4].map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">17-06-2025</TableCell>
            <TableCell>FrontEnd</TableCell>
            <TableCell>Google</TableCell>
            <TableCell className="text-right">
              {" "}
              <Badge className="bg-slate-500 border rounded-xl ">
                Selected
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

export default AppliedJobTable;
