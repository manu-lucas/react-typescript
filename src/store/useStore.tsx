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
    getPosts:()=>Promise<void> 
  }


  export const useStore = create<BearState>()((set) => ({
    bears: 0,
    increase: (value:number) => set((state) => ({ bears: state.bears + value })),
    posts:[],
    
    getPosts: async ()=>{
      const result = await fetch("https://jsonplaceholder.typicode.com/posts")
      const converResult = await result.json()
      set((state) => ({ ...state, posts: converResult }));    }

  }))
