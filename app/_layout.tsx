import { SessionProvider } from "@/context/authContext";
import ReduxProvider from "@/redux/provider";
import { Slot } from "expo-router";

export default function Root() {
  return (
    <ReduxProvider>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </ReduxProvider>
  );
}
