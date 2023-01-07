import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter();
  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (!token) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [router]);

  return (
    <div>Index Page</div>
  );
}
