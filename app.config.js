import appJson from "./app.json"

export default {
    ...appJson,// inherit app.json config
    expo: {
     ...appJson.expo,// inherit app.json config
     
     // config .env
      extra: {
        API_URL: process.env.API_URL ,
      },

      plugins: [
        "expo-secure-store"
      ],
    },
  };