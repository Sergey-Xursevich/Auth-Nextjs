"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schema";
import { login } from "@/actions/login";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form, FormField, FormLabel, FormMessage, FormItem } from "@/components/ui/form";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [ isPending, startTransition ] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
        email: "",
        password: ""
    }
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(data).then((response) => {
        setError(response.error);
        setSuccess(response.success);
      })
    });
  }
  
  return (
    <CardWrapper 
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField 
              control={form.control} 
              name="email" 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="email"
                    placeholder="jonh.doe@gmail.com"
                  />
                  <FormMessage>
                    {form.formState.errors.email?.message}
                  </FormMessage>
                </FormItem>
              )} />
              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="********"
                    />
                    <FormMessage>
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>Login</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};