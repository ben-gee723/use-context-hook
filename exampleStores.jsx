import useMyContext from "@ben-gee723/use-context-hook";

const [ CounterContext, counterStore ] = useMyContext({
    name: "counter",
    init: {
        count: 0
    },
    functions: {
        increase: (state, setState) => setState({...state, count: state.count + 1}),
        decrease: (state, setState) => setState({...state, count: state.count - 1}),
    }
})

const [ UserContext, userStore ] = useMyContext({
    name: "user",
    init: {
        name: "John Doe",
        email: "john.doe@jd.com",
        data: []
    },
    functions: {
    }
})

export { CounterContext, counterStore, UserContext, userStore };