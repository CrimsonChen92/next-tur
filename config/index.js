//here we make a ternary where if we are in production, we use our website name
//and if we are still making the site for testing, we use the localhost:3000

const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
