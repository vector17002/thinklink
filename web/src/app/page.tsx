import { Button } from "@/components/ui/button";
import { db } from "@/db";

export default function Home() {
  return (
    <div className="text-center text-red-500">
      {db.query.users.findMany().then((users) => 
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name} - {user.email}</p>
          </div>
        ))
      )}
      <h1 className="text-4xl font-bold">Welcome to the Zapier Clone!</h1>
      <p className="mt-4 text-lg">
        This is the home page of your Next.js application using Drizzle ORM with
        Neon.
      </p>
      <Button className="mt-6">Get Started</Button>
    </div>
  );
}
