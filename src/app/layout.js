import "./globals.css";

export const metadata = {
  title: "Conexão Brigada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
