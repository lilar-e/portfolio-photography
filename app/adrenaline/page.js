import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://previews.dropbox.com/p/thumb/ACZ88nuKfde3g99KGbOVviJXKhkmDUUdogefAa0M7r5DKAT8o4uCSdmAKmWmAmxW_JzOHZXkEQoDC21HEfTtQXd3zLrjJggEIKtmhdFgu2-AOnPgGGGP-WC1Seq48Y7gMuPqcYcERlIB2n9qsgqKG1AJl3w1TZjIDb8KmvQbs5ktFGEfm_Rm2G8NRjLvz1Gjm3zwFPDuiqbiDpreg-4LjQChwee89hkGUdTEwpX3I-LX7Mw-fZV6TzGohcRMdA7NP1PDpG_AutXGFUR1VCFJvMIaSR_jpsGf8awdcifYDcUne0lmNm_pZ4UwRgTf1_Y5irk/p.jpeg",
      objectFit: "cover",
      width: "auto",
      height: "39em", 
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACb9F3JymODtSv93BhaZiLRNPD-045QAVww9GLBrfXZ1h58d_FOCfr0TTfjjRfPOAYtesfJGfRZPo6ElGzHKGjghGBF_e7L3E235ngguEnweEUiAwr5jmQNCpTvmcmqVm5DRN2PoZR-neYYJgDu8OowBp5wvTrbBUGXU1dGYLSHQos88k3zuZgekLaqbAKiHabJdwqZzuqBuOkRTdBop9bXDLuee7X-Lh-nkQiPV10ydQI8TuwdGgC9XO3b7Vwynz7MfRV4vPQ3Aczy1T1Ul3aq9OQ74UxCeYDhz7UX-nwicr2RCVzQszxmGvB_nuOofYSw/p.jpeg",
      objectFit: "contain",
      height: "40em",
      width: "fit-content",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACbqsNvmaRXcmcDbXz72vqW7BIzD8WhOJ8OLlL5DDcigJUULGzFtF28H5slvtQYewrBgfkeif-s518TJbK8diPpGRdg6wwN1Sas5hzbKamHbGjjxSrGKu1FuJlEnTeBvtMAAzEcEW3cykUjZMoX1oL_WGQyak4EhPechtAEP2tyJRx0fMe5mDu3y7yp2fO1F--C0FlzD7en0oAQGwAtWS-2o3jnG9elo3HzECuCMFXPr1x67K--IlVLTa-zvl75NENDkpUQ7bPzpsexiFEt4I5HxFbHYwH1OaVtJL0izwcoolp_HuBp2ypkcH4dqO92JAYg/p.jpeg",
      objectFit: "cover",
      width: "30em",
      height: "max-content",
    }
  ];

  return (
    <Gallery imagenes={imageUrls}/>
  );
}
