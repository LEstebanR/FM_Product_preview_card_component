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
  priceOff: 169.99,
  realPrice: 149.99,
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-cream">
      <Card info={CARD_INFO} />
    </div>
  );
}

export default App;
