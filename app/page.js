import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      Subscribe to my page
      <Button 
        variant={"outline"}
        className="w-fit"
      >
        Button
      </Button>
    </div>
  );
}
