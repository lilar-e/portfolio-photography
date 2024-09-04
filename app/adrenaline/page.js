import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://i.postimg.cc/NQtytrcd/DSC5635.jpg",
      classes: "md:col-span-3",
    },
    {
      url: "https://i.postimg.cc/CYtD3152/qO92JAYg.jpg",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://i.postimg.cc/37Wmfp8p/nuOofYSw-.jpg",
      classes: "aspect-w-1 aspect-h-1",
    },
  ];

  return (
    <Gallery imagenes={imageUrls}/>
  );
}
