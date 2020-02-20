export default {
    namespaced: true,
    state: {
        works:[]
    },
    mutations: {
        ADD_WORK: (state, work) => state.works.push(work),
    },
    
    actions:{
        async addWork({commit}, work){
            try {
                const {data} = await this.$axios.post("/works", work);
                commit("ADD_WORK", data, {root:true});
            } catch (error) {
             throw new Error(error.response.data.error || error.response.data.message);
            }
        },
        
    }

};