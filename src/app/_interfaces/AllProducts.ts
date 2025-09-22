export type productType = {
  id: string;
  title: string;
  images:string[];
  imageCover: string;
  category: categoryType;
  description: string;
  brand: brandType;
  price: number;
  ratingsAverage: number;
};

export type categoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export type productDetailsprops = {
  params: {
    id: string;
  };
};

export type brandType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};


export type subcategoriesType = {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
}