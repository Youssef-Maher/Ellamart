<template>
  <div class="top-cat">
    <div class="cyber-banner">
      <img src="@/assets/images/cyber-banner.webp" width="100%" />
    </div>
    <div class="categorise py-5">
      <v-container>
        <div class="title mb-5 d-flex justify-space-between align-center">
          <h2>Shop By Categories</h2>
        </div>
        <v-row>
          <v-col
            cols="4"
            sm="3"
            md="2"
            v-for="categorie in categories"
            :key="categorie.title"
            elevation="0"
          >
            <v-card elevation="0" style="cursor: pointer">
              <img :src="categorie.image" alt="" />
              <v-card-text class="card-title pa-1 pa-sm-4">{{
                categorie.title
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Mobile phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "Latops & Tablets",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "Televisions",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "PC's & Accessories",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen Appliances",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.top-cat {
  .title {
    font-size: 18px;
    font-weight: 900;
    color: black;
    a {
      color: black;
      font-size: 16px;
      font-weight: normal;
    }
  }
  .v-card {
    img {
      width: 100%;
      border: 1px solid #d2d2d2;
      border-radius: 50%;
    }
  }
  .card-title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
  }
}
@media (max-width: 580px) {
  .top-cat .card-title {
    font-size: 13px;
  }
}
</style>
