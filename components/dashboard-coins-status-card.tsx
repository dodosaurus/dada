import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardCoinsStatusCard() {
  return (
    <Card className="flex-grow">
      <CardHeader className="pb-2">
        <CardDescription>Coin balance</CardDescription>
        <CardTitle className="text-4xl">1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground">+25% from last week</div>
      </CardContent>
      <CardFooter>
        <Progress value={25} aria-label="25% increase" />
      </CardFooter>
    </Card>
  )
}
