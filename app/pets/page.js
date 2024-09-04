import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://i.postimg.cc/zq4nTfZW/o20bzgkQ.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/50sXXgvh/pcC4UuPE.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/81WL4VNY/EVvZTn4.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/XVwyFcgS/AGzqsJOw.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/90vF9nfn/Ic77kL4d.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/xfnNPJsk/Yj7yWHY4.jpg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/mRryxJwP/DSC-9912-b-n.jpg",
      objectFit: "contain",
      classes: "md:col-span-3",
    },
    {
      url: "https://i.postimg.cc/1m3wQVDk/DSC-3684.jpg",
      objectFit: "contain",
      classes: "md:col-span-3",
    },
  ];


  return (
    <Gallery imagenes={imageUrls} />
  );
}
