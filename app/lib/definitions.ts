export type Product = {
  id: string;
  gender_id: string;
  size_id: string;
  name: string;
  image_url: string;
  amount: number;
  description: string;
}

export type Sizes = {
  id: string;
  gender_id: string;
  size: string;
}

export type Gender = {
  id: string;
  name: string;
}
