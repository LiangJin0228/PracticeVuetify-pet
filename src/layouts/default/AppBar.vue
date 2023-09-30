<template>
  <v-app-bar color="primary" class="px-1">
    <v-app-bar-nav-icon icon="mdi-home"></v-app-bar-nav-icon>
    <v-app-bar-title>小明寵物店</v-app-bar-title>

    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">首頁</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/shop">購物</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/about">關於我們</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/contact">聯係我們</v-btn>

    <v-spacer></v-spacer>

    <v-btn class="mx-3" icon="mdi-cart-outline"></v-btn>
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="large">
            <v-icon>mdi-login</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-btn rounded variant="text" to="/login">
              Login
            </v-btn>
            <v-btn rounded variant="text" to="/register">
              Register
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {

}
</script>
