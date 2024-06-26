import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Card } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { getRarityColorClass } from "@/lib/utils";

export default function OpeningTable({ assignedCards }: { assignedCards: Card[] }) {
  return (
    <Table className="flex justify-center items-center">
      <TableBody>
        {assignedCards.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="flex justify-center items-center">
              <Loader2 className="h-8 w-8 animate-spin" />
            </TableCell>
          </TableRow>
        )}
        {assignedCards.length > 0 &&
          assignedCards.map((card) => (
            <TableRow key={card.id} className={`bg-${getRarityColorClass(card.rarity, "100")}`}>
              <TableCell>
                <div className="font-medium">{card.name}</div>
                <div className="text-sm text-muted-foreground">{card.id}</div>
              </TableCell>
              <TableCell className="table-cell">{card.additionalInfo1}</TableCell>
              <TableCell className="hidden sm:table-cell">{card.additionalInfo2}</TableCell>
              <TableCell className="hidden md:table-cell">{card.country}</TableCell>
              <TableCell className="hidden md:table-cell">{card.dateInfo}</TableCell>
              <TableCell className="table-cell">
                <Badge className="text-xs" variant="secondary">
                  <div className="flex justify-start items-center gap-1">
                    <span>{card.rarity}</span>
                  </div>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
