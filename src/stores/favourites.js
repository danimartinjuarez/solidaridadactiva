import { defineStore } from 'pinia'
//import { prependListener } from 'process'

export const  favouriteList = defineStore({
  id: 'listfav',
  state: () => ({
    usersInFav:[]
           
  }),
  getters: {
  },
  actions: {
    addFavorites(userObject) {
        if(this.usersInFav.length === 0){
          this.usersInFav.push(userObject) ;
          return window.alert('Has agregado a ' + userObject.name + ' a tu vista de favoritos');

        }
       for(let i = 0; i < this.usersInFav.length; i++){
            
        
       if ( this.usersInFav[i].id === userObject.id) {
        return window.alert('Ya tienes pensado ayudar a esta persona, prueba con otro');
       }}
        this.usersInFav.push(userObject) 
        return window.alert('Has agregado a ' + userObject.name + ' a tu vista de favoritos');

  },
}})


