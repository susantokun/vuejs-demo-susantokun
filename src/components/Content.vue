<template>
  <div class="ui container">
    <div class="ui styled fluid accordion">
      <template v-for="(categoryContent, i) in categoryContents" :key="i">
        <div class="title" @click="tablesort(), dropdown()">
          <i class="dropdown icon"></i>
          {{ categoryContent.name }}
        </div>
        <div class="content">
          <p v-html="categoryContent.description"></p>
          <table
            class="ui selectable celled table sortable"
            v-bind:class="categoryContent.color"
          >
            <thead>
              <tr>
                <th class="ui center aligned">Title</th>
                <th class="ui center aligned">Description</th>
                <th class="ui center aligned no-sort">Link</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(content, i) in contents">
                <tr v-if="content.category == categoryContent.name" :key="i">
                  <td class="ui left aligned single line">
                    {{ content.title }}
                  </td>
                  <td class="ui left aligned" v-html="content.description"></td>
                  <td class="ui single line center aligned">
                    <div
                      class="ui floating dropdown top left pointing teal mini button"
                    >
                      <div class="text">Choose</div>
                      <i class="dropdown icon"></i>
                      <div class="menu">
                        <a
                          v-bind:href="content.url_github"
                          target="_blank"
                          class="item"
                        >
                          <i class="github icon"></i>Github
                        </a>
                        <a
                          v-bind:href="
                            'https://www.youtube.com/watch?v=' +
                              content.url_youtube
                          "
                          target="_blank"
                          class="item"
                        >
                          <i class="youtube icon"></i>Youtube
                        </a>
                        <a
                          v-bind:href="content.url_ld"
                          target="_blank"
                          class="item"
                        >
                          <i class="eye icon"></i>Live Demo
                        </a>
                        <a
                          v-bind:href="content.url_sc"
                          target="_blank"
                          class="item"
                        >
                          <i class="code icon"></i>Source Code
                        </a>
                        <a
                          v-bind:href="content.url_db"
                          target="_blank"
                          class="item"
                        >
                          <i class="database icon"></i>Database
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import 'jquery-tablesort';

import { mapState } from 'vuex';

import avatar from '../assets/images/avatar.png';

const $ = window.$;
$(document).ready(function() {
  $("body").toast({
    position: "bottom center",
    showProgress: "bottom",
    classProgress: "red",
    displayTime: 10000,
    showImage: avatar,
    classImage: "avatar",
    message: `Selamat datang ...\n DEMO.susantokun.com`
  });
});

export default {
  name: "Content",
  computed: {
    ...mapState(["categoryContents", "contents"])
  },
  methods: {
    dropdown() {
      $(".ui.dropdown").dropdown({
        action: "nothing",
        transition: "drop"
      });
    },
    tablesort() {
      $("table").tablesort();
    }
  },
  mounted() {
    $(document).ready(function() {
      $("table.sortable");
      $(".ui.accordion").accordion();
      $(".ui.dropdown").dropdown({
        action: "nothing",
        transition: "drop"
      });
    });
  }
};
</script>
