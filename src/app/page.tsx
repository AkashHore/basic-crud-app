import ToastButton from "@/components/Buttons/ToastButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Basic CRUD",
  description: "Home page of Basic CRUD App",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <div className="space-y-12 text-center">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-semibold">Welcome to</h1>
          <h1 className="text-5xl font-semibold">The Basic CRUD Application</h1>
        </div>
        <h2 className="text-2xl">
          A simple system for performing Create, Read, Update, and Delete
          operations.
        </h2>

        <ToastButton />
      </div>
    </section>
  );
};

export default page;
