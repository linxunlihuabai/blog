# 简单实现redux核心

```js
function createStore(initState, reducer){
    let state = initState;
    let listeners = [];

    function getState(){
        return state;
    }

    function dispatch(action){
        let newState = reducer(state, action);
        if(newState !== state){
            state = newState;
            listeners.forEach(listener=>{
                listener(state);
            })
        }
    }

    function subscribe(listener){
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter(l=>l!==listener);
        }
    }

    return {getState,dispatch,subscribe}
}
```