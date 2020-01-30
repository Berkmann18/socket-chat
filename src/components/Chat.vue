<template>
  <v-card class="mt-3">
    <v-card-title>
      <h3>Chat Group</h3>
    </v-card-title>
    <v-card-text>
      <div class="messages">
        <p v-for="msg in messages" :key="msg.ts">
          <strong>{{ msg.user }}</strong
          >: {{ msg.message }}
        </p>
      </div>
      <br />
      <v-text-field label="User:" type="text" v-model="user"></v-text-field>
      <v-textarea label="Message:" v-model="message"></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" @click.prevent="sendMessage">Send</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import io from "socket.io-client";

const PORT = process.env.PORT ?? 3001;
/* eslint-disable no-console */
export default {
  name: "chat",
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io(`localhost:${PORT}`)
    };
  },
  methods: {
    sendMessage() {
      const data = {
        user: this.user,
        message: this.message,
        ts: Date.now() + this.user[0]
      };
      console.log("Sending data=", data);
      this.socket.emit("SEND_MESSAGE", data);
      this.message = "";
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages.push(data);
      console.log(data);
    });
  }
};
</script>
