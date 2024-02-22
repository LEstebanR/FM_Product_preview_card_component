import { FC } from "react";

type CardProps = {
  info: {
    title: string;
    image: {
      mobile: string;
      desktop: string;
      alt: string;
    };
    type: string;
    description: string;
    priceOff: number;
    realPrice: number;
  };
};

const Card: FC<CardProps> = ({ info }) => {
  return (
    <div className="flex h-90 w-11/12 max-w-100 flex-col gap-1 rounded-xl bg-white  md:h-100  md:flex-row md:items-center md:justify-between">
      <img
        src={info.image.mobile}
        alt={info.image.alt}
        className="h-2/6 rounded-t-xl md:hidden"
      />
      <img
        src={info.image.desktop}
        alt={info.image.alt}
        className="hidden h-full w-1/2 rounded-l-xl md:block"
      />
      <div className="flex h-full flex-col justify-around p-8 md:w-1/2">
        <p className="font-montserrat uppercase leading-loose tracking-widest text-gray">
          {info.type}
        </p>
        <h1 className="font-frauces text-3xl font-extrabold">{info.title}</h1>
        <p className="font-montserrat text-sm text-gray">{info.description}</p>
        <div className="flex items-center gap-4">
          <p className="font-frauces text-4xl font-extrabold text-primary">
            ${info.priceOff}
          </p>
          <p className="text-sm text-gray line-through">${info.realPrice}</p>
        </div>
        <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary p-2 font-montserrat text-sm font-bold text-white">
          <img src="/assets/icon-cart.svg" alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
