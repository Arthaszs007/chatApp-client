import { verifyJWT } from "@/api/auth";
import { useSession } from "@/context/authContext";
import { getJWT } from "@/lib/jwt";
import { useSocket } from "@/lib/socket";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function AppLayout() {
  // use to session management
  const { session, setAuthSession, signOut } = useSession();
  // use to await the result of jwt verify
  const [isLoading, setIsLoading] = useState(true);
  // receive a instance of socket and connect the socket server
  const { socket } = useSocket();

  // verify the jwt after app mounted first time,if passed, pass value to session
  useEffect(() => {
    const jwt = async () => {
      const token = await getJWT();
      // will mount component after the verify
      if (token) {
        const res = await verifyJWT(token);
        if (res && !res.error) {
          setAuthSession(res);
          setIsLoading(false);
          return;
        }
        // if occured an error with verify jwt, run signout to delete the local storage
        signOut();
      }
      setIsLoading(false);
    };

    jwt();
  }, []);

  // limit to load before verify the jwt
  if (isLoading) return null;

  return session ? (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="room/[id]" options={{ title: "name22" }} />
      <Stack.Screen name="detail/[user]" options={{ title: "name22" }} />
      <Stack.Screen name="search/index" options={{ headerShown: false }} />
    </Stack>
  ) : (
    <Redirect href={"/login"} />
  );
}
