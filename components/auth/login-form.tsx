"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form, FormField, FormLabel, FormMessage, FormItem } from "@/components/ui/form";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
        email: "",
        password: ""
    }
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  }
  
  return (
    <CardWrapper 
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/login"
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
          <FormError message="" />
          <FormSuccess message="" />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </Form>
    </CardWrapper>
  );
};