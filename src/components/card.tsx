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
    <div className="my-4 flex h-90 w-11/12 max-w-100 flex-col gap-1 rounded-xl  bg-white  md:h-100 md:flex-row md:items-center md:justify-between">
      <picture className="size-full">
        <source srcSet={info.image.mobile} media="(max-width: 768px)" />
        <source srcSet={info.image.desktop} media="(min-width: 769px)" />
        <img
          src={info.image.desktop}
          alt={info.image.alt}
          className="h-full rounded-t-xl md:w-full md:rounded-l-xl md:rounded-r-none"
        />
      </picture>
      <div className="flex h-full flex-col justify-around gap-2 p-8 md:w-1/2">
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
        <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary p-2 font-montserrat text-sm font-bold text-white hover:bg-hover">
          <img src="/assets/icon-cart.svg" alt="cart icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
