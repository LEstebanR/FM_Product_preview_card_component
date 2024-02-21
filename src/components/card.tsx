import { FC } from "react";

type CardProps = {
  info: {
    title: string;
    image: {
      mobile: string;
      desktop: string;
      alt: string;
    };
  };
};

const Card: FC<CardProps> = ({ info }) => {
  return (
    <div className="flex h-5/6 max-h-100 w-11/12 max-w-100 flex-col gap-1 rounded-xl  bg-white  md:flex-row md:items-center md:justify-between">
      <img
        src={info.image.mobile}
        alt={info.image.alt}
        className="rounded-t-xl"
      />
      <div className="flex flex-col md:w-1/2">
        <p>Type</p>
        <p>{info.title}</p>
        <p>DEscription</p>
        <div className="flex gap-1">
          <p>Price off</p>
          <p>Real price</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
