import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { contacts } from "@wix/crm";

const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "";

export const wixClient = createClient({
  modules: {
    products,
    contacts,
  },
  auth: OAuthStrategy({
    clientId: clientId,
  }),
});

export const isWixConfigured = () => {
  return typeof window !== "undefined"
    ? !!process.env.NEXT_PUBLIC_WIX_CLIENT_ID
    : !!process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
};
