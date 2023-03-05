export default class SwapiService {
    source = 'https://swapi.dev/api'
  
    async getResource(url){
      const res = await fetch(`${this.source}${url}`)
      if(!res.ok){
        throw new Error(`Couldnt fetch ${url}, received ${res.status}`)
      } 
      return await res.json()
    }
  
    async getAllpeople(){
      const res = await this.getResource(`/people`)
      return res.results
    }
    
    getPerson(id){
      return this.getResource(`/people/${id}/`)
    }
  
    async getAllPlanets(){
      const res = await this.getResource(`/planets`)
      return res.results
    }
    
    getPlanet(id){
      return this.getResource(`/planets/${id}/`)
    }
  
    async getAllStarships(){
      const res = await this.getResource(`/starships`)
      return res.results
    }
    
    getStarship(id){
      return this.getResource(`/starships/${id}/`)
    }
  
  }
  
  const swapi = new SwapiService()
  swapi.getPlanet(3).then((element) => {
      console.log(element.name)
  })