export const logActions = store => next => actionInfo => {
    next(actionInfo)
}