"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return (
    user && (
      <div>
        <h1>Profile</h1>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
