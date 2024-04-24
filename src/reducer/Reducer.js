import { createSlice } from "@reduxjs/toolkit";
const initialState={
    products:[],
    keyword:''
}
const TheSlice=createSlice({
    name:'items',
    initialState,
    reducers:{
        addItems:(state,{payload})=>{
            const produit=state.products.find((p)=>p.id==payload.p.id)
            if(produit){
                const newproducts=state.products.map(item=>item.id==payload.p.id?{...item,qnt:payload.qnt+item.qnt||++item.qnt}:item)
                state.products=newproducts
            } else{
                state.products=[...state.products,{...payload.p,qnt:payload.qnt||1}]
            }
        },
        removeItems:(state,{payload})=>{
            const newproducts=state.products.filter(item=>item.id!==payload.id)
            state.products=newproducts
        },
        
        decrementqnt:(state,{payload})=>{
            const produit=state.products.find((p)=>p.id==payload.id).qnt
            if (produit>1){
                const newproducts=state.products.map(item=>item.id==payload.id?{...item,qnt:--item.qnt}:item)
            state.products=newproducts
            }else{
                const newproducts=state.products.filter(item=>item.id!==payload.id)     
                state.products=newproducts
            }
            
        },
        search:(state,{payload})=>{
            state.keyword=payload
        }
    }
})
export const {addItems,removeItems,decrementqnt,search} = TheSlice.actions ;
export default TheSlice.reducer;