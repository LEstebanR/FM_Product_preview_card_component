import Card from "./components/card";

const CARD_INFO = {
  title: "Gabriellle Essence Eau de Parfum",
  image: {
    mobile: "/assets/image-product-mobile.jpg",
    desktop: "/assets/image-product-desktop.jpg",
    alt: "perfume bottle",
  },
  type: "perfume",
};

function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-cream">
      <Card info={CARD_INFO} />
    </div>
  );
}

export default App;
