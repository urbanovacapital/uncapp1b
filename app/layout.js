export const metadata = {
  title: "Urbanova Capital",
  description: "Invierte en propiedades reformadas con rentabilidad garantizada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#f5f5f5' }}>{children}</body>
    </html>
  );
}