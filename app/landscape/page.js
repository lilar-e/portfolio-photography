import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://i.postimg.cc/WjRTxcjn/DSC-4600.jpg",
      classes: "md:col-span-3",
    },
    {
      url: "https://i.postimg.cc/hg9cBZtq/Sin-t-tulo1.jpg",
      classes: "md:col-span-3",
    },
    {
      url: "https://i.postimg.cc/J7TX0r5s/bWSKFOjs.jpg",
      classes: "md:col-span-3",
    },
    {
      url: "https://i.postimg.cc/9fR2dB63/DSC9019.jpg",
      classes: "md:col-span-3",
    },
  ];

  return (
    <Gallery imagenes={imageUrls}/>
  );
}
