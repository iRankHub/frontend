import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react";

function Certificates() {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-foreground capitalize text-xl">
        Certificates Awarded
      </h3>
      <p className="text-sm font-semibold text text-zinc-900 max-w-2xl py-2">
        A certificate of completion is awarded to all Students and Instructors
        who satisfactorily complete iDebate courses and competitions. This is
        indicated by a “complete” marked in the grade book for the relevant
        course. A certificate of completion is not the same as a an award
        certification
      </p>
      <Link href={"#"} className="text-sm text-primary hover:underline">Certificate FAQ</Link>
      <Table className="my-10">
        <TableCaption>A list of your recent earned certificates.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-foreground">Certificate Name</TableHead>
            <TableHead className="font-semibold text-foreground">Occasion</TableHead>
            <TableHead className="font-semibold text-foreground">Date</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">DAC 2023</TableCell>
            <TableCell>Dreamers Academy</TableCell>
            <TableCell>21 Aug 2023</TableCell>
            <TableCell className="text-right">
                <Button className="rounded-full" size={"sm"}>Get Certificate</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DAC 2023</TableCell>
            <TableCell>Dreamers Academy</TableCell>
            <TableCell>21 Aug 2023</TableCell>
            <TableCell className="text-right">
                <Button className="rounded-full" size={"sm"}>Get Certificate</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Best Judje</TableCell>
            <TableCell>Dreamers Academy</TableCell>
            <TableCell>21 Aug 2022</TableCell>
            <TableCell className="text-right">
                <Button className="rounded-full" size={"sm"}>Get Certificate</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DAC 2023</TableCell>
            <TableCell>National Debate</TableCell>
            <TableCell>16 March 2022</TableCell>
            <TableCell className="text-right">
                <Button className="rounded-full" size={"sm"}>Get Certificate</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">DAC 2023</TableCell>
            <TableCell>Dreamers Academy</TableCell>
            <TableCell>21 Aug 2023</TableCell>
            <TableCell className="text-right">
                <Button className="rounded-full" size={"sm"}>Get Certificate</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Certificates;
