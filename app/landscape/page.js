import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://previews.dropbox.com/p/thumb/ACbViGTYcoFRAsN7YNLi_rjGvKVwJt5rUSeOX5TvE_cV7U3QGTo1A4cHM5DM-ciRpvq7mshw5YSG99PwjOGdWE0H200ruFGjcKnDlzW4hFkYsUDDk2oTLa1UUWJRhaiGNrm29_ANy__JTktTY8gteyLyMmEwvPzO5JosrEvnk1CL0hKDEGDvgD3dy3GoNi61G7_CQhl8-aa0uZIO8RKbTTS8u6oTJHiqF7U7ZYA9JGfWzVRUuRINU_ZvORS9OKX5JtKvqwl2CUOfK7WfP9V3i_7WbIQauinm_wBo9HsZS5Q0M1yyahkeYOUqekxbWSKFOjs/p.jpeg",
      objectFit: "contain",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACayOQfN1AHna_mFo2M06HLIqi9kW1Gj5fdG_RBZz8zA_JD5-ISe7Fc-m_avBux1O4_Kc76l2fz3uF0wOviHlrIW9svUmD7j1Z-Rbnw7UauqE0T3l2pY9JYtIa2Id8WPVItT6zmmz9HKv0jIQhLOZdX49qOgJTHGuZL55K0z5SACfyg_4C0I3C3KCxGfg2Hfppf76QxSgkB50TEY5Bjjc7n9gR4kg4FN2-uXn8qXv19gnZ0jB1TFxrlXwoMzy8ATMPZGz1xIvmQ0PVPyNPoaxlXFwGfVNG4pCVrS0kG2UfEokQ7-tBwIkX_GFTVaU4lzd6Q/p.jpeg",
      objectFit: "contain",
    },
  ];

  return (
    <Gallery imagenes={imageUrls}/>
  );
}
