export function runFunctionByRoute(callback, route = window.location.pathname) {
    const currentPath = window.location.pathname;

    if (route !== currentPath) {
        //console.warn(`WARNING: This function ${callback} was not able to translate on this route: ${route} \n Check the route parameter`);
        return;
    }

    callback();
}