import { defineStore } from 'pinia'

export const useTestStore = defineStore('testStore',{
  
  state: () => ({


    cards: [],
    spaceImage: null,
  }),
  getters: {
  },
  actions: {
    addCard(newCard){
      this.cards.push(newCard);
    }
  },
})
