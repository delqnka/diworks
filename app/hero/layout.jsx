export const metadata = {
  title: "Synthetic Nature",
};

export default function HeroLayout({ children }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&display=swap"
      />
      {children}
    </>
  );
}
