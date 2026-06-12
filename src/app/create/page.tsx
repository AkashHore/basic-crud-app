import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Separator } from "@/components/shadcnui/separator";
import UserForm from "@/components/UserForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create - Basic CRUD",
  description: "Create page of Basic CRUD App",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="text-center text-lg">Create User</CardTitle>
        </CardHeader>

        <Separator />

        <UserForm />
      </Card>
    </section>
  );
};

export default page;
