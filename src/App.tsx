import Card from "./components/card";

const CARD_INFO = {
  title: "Gabriellle Essence Eau de Parfum",
  image: {
    mobile: "/assets/image-product-mobile.jpg",
    desktop: "/assets/image-product-desktop.jpg",
    alt: "perfume bottle",
  },
  type: "perfume",
  description:
    "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.",
  priceOff: 149.99,
  realPrice: 169.99,
};

function App() {
  return (
    <div
      className="flex min-h-screen w-screen items-center justify-center bg-cream"
      role="main"
    >
      <Card info={CARD_INFO} />
    </div>
  );
}

export default App;
