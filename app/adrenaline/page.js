import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://previews.dropbox.com/p/thumb/ACb9F3JymODtSv93BhaZiLRNPD-045QAVww9GLBrfXZ1h58d_FOCfr0TTfjjRfPOAYtesfJGfRZPo6ElGzHKGjghGBF_e7L3E235ngguEnweEUiAwr5jmQNCpTvmcmqVm5DRN2PoZR-neYYJgDu8OowBp5wvTrbBUGXU1dGYLSHQos88k3zuZgekLaqbAKiHabJdwqZzuqBuOkRTdBop9bXDLuee7X-Lh-nkQiPV10ydQI8TuwdGgC9XO3b7Vwynz7MfRV4vPQ3Aczy1T1Ul3aq9OQ74UxCeYDhz7UX-nwicr2RCVzQszxmGvB_nuOofYSw/p.jpeg",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACbqsNvmaRXcmcDbXz72vqW7BIzD8WhOJ8OLlL5DDcigJUULGzFtF28H5slvtQYewrBgfkeif-s518TJbK8diPpGRdg6wwN1Sas5hzbKamHbGjjxSrGKu1FuJlEnTeBvtMAAzEcEW3cykUjZMoX1oL_WGQyak4EhPechtAEP2tyJRx0fMe5mDu3y7yp2fO1F--C0FlzD7en0oAQGwAtWS-2o3jnG9elo3HzECuCMFXPr1x67K--IlVLTa-zvl75NENDkpUQ7bPzpsexiFEt4I5HxFbHYwH1OaVtJL0izwcoolp_HuBp2ypkcH4dqO92JAYg/p.jpeg",
      classes: "aspect-w-1 aspect-h-1",
    },
  ];

  return (
    <Gallery imagenes={imageUrls}/>
  );
}
