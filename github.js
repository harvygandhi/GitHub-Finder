class GitHub{
  constructor() {
    this.client_id='1a6b18b653a713b1cbe6';
    this.client_secret='a547327a346919f6072c9c3cac51d6d41c8fa688';
    this.repos_count=5;
    this.repos_sort='created:asc';
  }

  async getUser(user){
    const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&
    sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile=await profileResponse.json();
    const repos=await repoResponse.json();
    return{
      profile,
      repos
    }

    
  }
}