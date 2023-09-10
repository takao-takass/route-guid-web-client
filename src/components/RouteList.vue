<template>
    <div>
      <h1>ルート一覧</h1>
      
      <table>
        <tr>
          <th>ルート名</th>
          <th>パーティション名</th>
          <th>パターン</th>
          <th>アクション</th>
        </tr>
        <tr v-for="route in routes" :key="route.ID">
          <td>{{ route.ID }}</td>
          <td>{{ route.Title }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'RouteList',
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    this.fetchRoutes();
  },
  methods: {
    fetchRoutes() {
      fetch('http://localhost:8000/routes/', {
          method: 'GET',
          headers: {
            'token' : 'your-token',
          }
        })
        .then(response => response.json())
        .then(data => {
          this.routes = data.routes;
        })
        .catch(error => console.error('Error:', error));
    }
  }
}
</script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>