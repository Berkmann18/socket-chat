<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Socket Chat
      </div>
    </v-app-bar>

    <v-content>
      <v-row>
        <v-col md="6" offset-md="3">
          <Chat />
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Chat from "@/components/Chat.vue";

export default {
  name: "app",
  components: {
    Chat
  }
};
</script>
