const app = Vue.createApp({
  data: function () {
    return {
      friends: [
        {
          id: "tom",
          name: "Tommy Surname",
          phone: "08844223442",
          email: "email@localStorage.com",
        },
        {
          id: "mary",
          name: "Mary Surname",
          phone: "08782901992",
          email: "email@localStorage.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component('friend-contact', {
    data: function() {
        return {
            detailsAreVisible = false,
        }
    }, 
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");
