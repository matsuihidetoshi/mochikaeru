<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          お店の味を<br>モチカエル！
        </h1>

        <p class="title">
          お店とおうちを<br>つなげるサイト
        </p>

        <v-btn to="/shops" class="title primary">お店の一覧</v-btn>
      </v-col>

      <v-col cols="12">
        <iframe class="map" v-bind:src="map"></iframe>
      </v-col>

      <v-flex xs12 sm6 md6 text-center class="pa-3">
        <v-card min-height="330px" class="pt-5">
          <h2 class="headline font-weight-bold mb-3 mt-3">
            使い方
          </h2>
          <div>お店を選ぼう</div>
          <v-btn to="/shops" class="title primary">お店の一覧</v-btn>
          <div>⬇︎</div>
          <div>メニューをチェック</div>
          <div>⬇︎</div>
          <div>お店にTEL予約</div>
          <div>⬇︎</div>
          <div>お店に行って受け取ろう！</div>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 md6 text-center class="pa-3 mh-10">
        <v-card min-height="330px" class="pa-3">
          <h2 class="headline font-weight-bold mb-3 mt-3">
            大事なページ
          </h2>
          <p class="description">
            浜松市では、新型コロナウイルス
            感染症防止のために各種の
            対策サイトを公開して居ます。
            オープンソースプロジェクトとして
            進行しており、下記リンクより
            開発に貢献していただくことができます。
          </p>
          <p
            v-for="(link, i) in importantLinks"
            :key="i"
            class="mx-1"
            target="_blank"
          >
            <a :href="link.href" target="_blank">{{ link.text }}</a>
          </p>
        </v-card>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Top',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: '新型コロナウイルス感染症拡大防止サイト',
          href: 'https://stopcovid19-hamamatsu.netlify.com/',
        },
        {
          text: '防止サイトGitHub',
          href: 'https://github.com/code-for-hamamatsu',
        },
        {
          text: 'このサイトのGitHub',
          href: 'https://github.com/matsuihidetoshi/takeout-hamamatsu',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      map: "https://www.google.com/maps/d/embed?mid=1znYQhKGizcZab2ZTFwQ8r88Kekl1IiQn&hl=ja",
    }),
  }
</script>
<style>
.description span {
  display: inline-block;
}
.map {
    width: 90%;
    margin: 5%;
    height: 400px;
}
</style>