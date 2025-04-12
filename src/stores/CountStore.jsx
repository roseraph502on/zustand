import {create} from "zustand";

const CountStore = create((set) =>({
    count: 0,
    increase:()=>set((state)=>({ count: state.count + 1})),
    decrease:()=>set((state)=>({ count: state.count - 1})),
    increaseBy:(value)=>set((state)=>({ count: state.count + value})),
    reset:()=>set((state)=>({ count: 0})),
}))
 export default CountStore;

