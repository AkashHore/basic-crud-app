"use client";

import { formSchema, FormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, UserPlusIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { CardContent, CardFooter } from "./shadcnui/card";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const UserForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
    },
    mode: "all",
  });

  const createFormhandller = async (cuData: FormType) => {
    await new Promise((r) => setTimeout(r, 1000));

    console.log(cuData);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(createFormhandller)}
      className=""
      noValidate>
      <CardContent className="grid gap-2 pb-4">
        <Controller
          name="userName"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your name"
                autoComplete="name"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="userEmail"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="email"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </CardContent>

      <CardFooter>
        <Button
          type="submit"
          className={"w-full"}
          disabled={isSubmitting}>
          {isSubmitting ?
            <>
              <LoaderIcon className="animate-spin" /> Creating..
            </>
          : <>
              <UserPlusIcon /> Create
            </>
          }
        </Button>
      </CardFooter>
    </form>
  );
};

export default UserForm;
