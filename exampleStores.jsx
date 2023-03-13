import useMyContext from "@ben-gee723/use-context-hook";

const [ CounterContext, counterStore ] = useMyContext({
    init: {
        count: 0
    },
    functions: {
        increase: (state, setState) => setState({...state, count: state.count + 1}),
        decrease: (state, setState) => setState({...state, count: state.count - 1}),
    }
})

export { CounterContext, counterStore };