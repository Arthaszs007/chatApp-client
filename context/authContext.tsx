import { useStorageState } from "@/hooks/useStorageState";
import { getJWT, setJWT } from "@/lib/jwt";
import { createContext, type PropsWithChildren, useContext } from "react";

// create a context of auth
const AuthContext = createContext<{
  signIn: (username: string, token: string) => void;
  signOut: () => void;
  setAuthSession: (username: string) => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  setAuthSession: () => null,
  session: null,
  isLoading: false,
});

// create a hook
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be warpped in <SessionProvider>");
    }
  }
  return value;
}

//create a provider to wrap the stack
export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  return (
    <AuthContext.Provider
      value={{
        // login with username as key and token as value, storage the session and token
        signIn: async (username: string, token: string) => {
          setSession(username);
          //save token
          setJWT(token);
        },
        // delete the local storage with the session as key
        signOut: async () => {
          setJWT(null);
          setSession(null);
        },
        // storage the session only
        setAuthSession: (username: string) => {
          setSession(username);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
