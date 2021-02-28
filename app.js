const app = Vue.createApp({
  data: function () {
    return {
    //   friends: [
    //     {
    //       id: "tom",
    //       name: "Tommy Surname",
    //       phone: "08844223442",
    //       email: "email@localStorage.com",
    //     },
    //     {
    //       id: "mary",
    //       name: "Mary Surname",
    //       phone: "08782901992",
    //       email: "email@localStorage.com",
    //     },
    //   ],
    };
  },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button v-on:click="toggleDetails">
        {{detailsAreVisible ? 'Hide Details' : 'Show Details'}}
        </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>`,
    data: function() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "tom",
                name: "Tommy Surname",
                phone: "08844223442",
                email: "email@localStorage.com",
              },
              
        }
    }, 
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");
