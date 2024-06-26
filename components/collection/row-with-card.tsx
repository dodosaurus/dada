import { Card } from "@prisma/client";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import CardPreview from "./card-preview";
import { Button } from "../ui/button";

export function RowWithCard({ card, owned, noOfCopies }: { card: Card; owned: boolean; noOfCopies: number }) {
  const getRarityColorClass = (rarity: string): string => {
    if (rarity === "uncommon") {
      return "bg-emerald-100";
    }
    if (rarity === "rare") {
      return "bg-sky-100";
    }
    if (rarity === "epic") {
      return "bg-violet-100";
    }
    if (rarity === "legendary") {
      return "bg-amber-100";
    }
    return "bg-slate-100";
  };

  return (
    <>
      {owned ? (
        <TableRow key={card.id} className={"pointer-events-none " + getRarityColorClass(card.rarity)}>
          <TableCell>
            <div className="font-medium">{card.name}</div>
            <div className="text-sm text-muted-foreground">{card.id}</div>
          </TableCell>
          <TableCell className="hidden sm:table-cell">{card.additionalInfo1}</TableCell>
          <TableCell className="hidden md:table-cell">{card.additionalInfo2}</TableCell>
          <TableCell className="hidden md:table-cell">{card.country}</TableCell>
          <TableCell className="hidden md:table-cell">{card.dateInfo}</TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge className="text-xs" variant="secondary">
              <div className="flex justify-start items-center gap-1">
                <span>{card.rarity}</span>
              </div>
            </Badge>
          </TableCell>
          <TableCell className="table-cell font-semibold text-center">x {noOfCopies}</TableCell>
          <TableCell className="table-cell">
            <CardPreview
              children={
                <Button className="pointer-events-auto" variant="outline">
                  Show
                </Button>
              }
              card={card}
            />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow className="pointer-events-none">
          <TableCell className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">{card.id}</div>
            <span className="text-sm text-muted-foreground">Card not owned</span>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
