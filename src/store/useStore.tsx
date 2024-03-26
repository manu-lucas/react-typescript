import { create } from 'zustand';


interface Post{
  id:number
  title:string
  body:string
}

interface BearState {
    bears: number
    increase: (value: number) => void
    posts:Post[]
  }


  export const useStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (value:number) => set((state) => ({ bears: state.bears + value })),
    posts:[]

  }))
