import { Gallery } from "@/components/component/gallery";

export default function Component() {
  const imageUrls = [
    {
      url: "https://previews.dropbox.com/p/thumb/ACZo7WQKChQQtUQMlAi-MV5bMArIIkhDPbnoiC-OFmBZEbpZHEkIuyqq2jR1YzFgQikAgP3ikUh7TJcy-_L6NWTOw-PcITUqvW4bD46nDj9bvX9d-uyI20AYf2bLPdplnVAt2ddOw8MwvBK-c-nolfLdev5Fn7lj2ec8L1s5dEfKEdN4R4aR2vFm1XpKBMyPxlTqsut3pzsAnfNT5MDjDc-vYaJ7ABEYIcDdaJTR4rTF5uuzNh8zr_3BxPKBfrUX6d_CaLApLEvkr2FXIHevoZKSsbjX1IxnyuqORyZluoviLagplw15WkeUNwNo20bzgkQ/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACYBHhwfl8Jgt81SIjTMyxIVdO9aSsLaSiCcAyvVdmtE-gksl42cbJydKd77ZzAQ7f1ryt1BXMbK18-mrFwvZ6QTcq1J3raOlVaAZ769MvYiFdGqLMvjhm55I7igE0cQlEMLMZvjc4vpSpsP0iAmn_9SYcZtRsPl9201CUTl02leUvZOUAuUKJUWYlqq4FbqCDx0gfE6SfM73m_K6M85X9eF80cdBqz7mmExcwRWdUTFSjb5doc9DY_wCuRYeF84DlTEa6kXeRUB2Nag7KpVMzKF5KQT6s1CVV_-uuxMbb5hT0l5tgjt5WwTB4r_EVvZTn4/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACbM5hQW2zJ58npuYe1s7mMqZolFQ3PAIZ3r8G8aVEF-_ZiS_mwcWzLmVC7ehbGtWWtJmOHaHl06uWpP41SsNJQ38ihXoLON_FI1lQQ01C6WVP8UG8GqdaPuXFndS8ETQCPN2eic2Sy12-ktHbcGdbSgccqK_PAfExTFdDQ5tlh_oJpQxX5qglUryuu-0Q7tLpzDXLboO_tb8elOs-iwNAehYXervJm8xHtVdQ_UaCTNr5LuK_bGIzGbH-aBbYEDe-_aTzkF6PITyOD4tgGqvdZYZMV4UqWSe9qURmJzqtGmQCAmEC-asBZX3LUpcC4UuPE/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACbMSDfpHXveZDzmLEXaVYm5DNvKI1D50oJECiG00UgehUEGQOSQcKQG9-JtCr6csIHu93U4BzJNyI3V-6QHorvvQcCydzHycXtY10D2L5EkfmbS9buAT_wRXaBvH2ZNQG-aGxwBdL-QlCGdxc_gCojzVedc1rkE3ZKLeP-cOA9LLgX-O5Z6rsQDmy7MRoNSfUgazwBvAIbBbKJIYDGJ90TBeRH3oJ3UC9SDo_ak9q9U_uZxDKiyncAyYYBTPYSzZsLqV9LXWlpiEOV7MmsyUJTS65S85f6GVK22a_toPVdd-OhM6ZZuKPTzGiLYj7yWHY4/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACaR50d99VOOTKkMgx0fguTMTnC0Zstp66eNLPQEwzwFwl7inR8OxrLo-3iVEtXdF3VD3_rtzG83TW5n4XzrP27sLeZdRTq0XL3a3hZxKKbHonmgOBnL-Ae1C3s32lXXRvXmJpfvkm-Mb6019fWPMny4UN7lz6pHwfEFWdTUxV58n_SzRWtbbvGmwZWECTnIP6s33shB6SAnx9CXxjQTNg_mCnl4LRUKIsRwY88mgwMbyh6dVDDwr30aGXgQlv9zk262ie-zovKKFWey8FCMsCflCrqLymCvkdRDR7xhYVISdbkWPpLygHh2RNfAGzqsJOw/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACb6iAOOCtcPiyGs6MEQaK3QA21XprRIUZQh5EMtwqHO7WlvIarYO6I5OcovEOkbk7eqSukt2fP6_69RJKOSsj2kLoGEhjpaZ93TgfJVvW-IpQkoLNW3SOLx_204VqQX7jveUyKwX3a6fpptOcz_2UGmPZhDkhtZurtFOq7fd41fKXgoi6JP9_1_musLml_xZJFt11M1rjzw1DTqe6_UCKMPflYT6XPAdYgl322RVwxovctcKjY5PdvdZa-NTpwr1-_jBRB8G6RriwmMbf39a-180TYM7bhP4QG2tpYqUT_BCz5e8bDFbFTdm9mFqLVC2JRSPQzYdUf_2EvuTLoNevuh9Cn7um7vfO9Jwxb0PE-GZymD23_sn0x5-c_HhQyD2d5iomQyuPrR-5SyzIkFx4dHcsIa35GVs-Gs7HLAA394Vv0FBCA5qJ9LmdgOWWKtvY6EeL512zKlz4KTgn0FjcKQKKXAc4OJTPtKSArzv_DcirgVoYx6iPRiehuK-s3v4GhBnmGmv3E2FcY1Ic77kL4d/p.jpeg",
      objectFit: "cover",
      classes: "aspect-w-1 aspect-h-1",
    },
    {
      url: "https://previews.dropbox.com/p/thumb/ACYHlAA1kyTH7Ubz-acOeRhemIjch2gZDnQ6UxFoXpgWnsDdJYCkYXugKJTtNH7LoVpjsemebkRf601emi8tbZfWSKs7lhxRShs_PUXf65qMCRbKm7sKDdmN9qdvzseoFrASjJCGD-SnTNYzFNLDCYSR98JD7w1IFPZrqh3JH2s1jQ1airpU3DAdz6EBupA79tb5Yf2n77rIcf32tiwqOSkIBFZYwG51tbKztrIVmL9ol31NuhnupKt2R76fxh4lvb_sXf-2vlZFLdOTotpPV8ObvnOCXqLgvlqXAyRZzqv7ddTs4Rhtz28L6_3b50eJX4E/p.jpeg",
      objectFit: "contain",
      classes: "md:col-span-3",
    },
  ];


  return (
    <Gallery imagenes={imageUrls} />
  );
}
