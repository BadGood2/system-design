"use strict";
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: [],
};
function hasPath(graph, source, dest) {
    let stack = [source];
    while (stack.length) {
        let curr = stack.pop();
        for (let i = 0; i < graph[curr].length; i++) {
            if (graph[curr][i] === dest)
                return true;
            stack.push(graph[curr][i]);
        }
    }
    return false;
}
// console.log(hasPath(graph, 'E', 'F'));
const graph2 = {
    w: ['x', 'y'],
    x: ['w', 'z'],
    y: ['w', 'u'],
    z: ['x', 'u'],
    u: ['y', 'z']
};
function shortestpath(graph, source, dest) {
    let visited = new Set();
    let minPath = Infinity;
    const stack = [[source, 0]];
    if (source === dest)
        return 0;
    while (stack.length) {
        visited.add(source);
        let [curr, distance] = stack.pop();
        for (let node of graph[curr]) {
            if (visited.has(node) && dest !== node)
                continue;
            visited.add(node);
            if (node === dest) {
                minPath = Math.min(minPath, Number(distance + 1));
            }
            stack.push([node, distance + 1]);
        }
    }
    return minPath === Infinity ? -1 : minPath;
}
console.log(shortestpath(graph2, 'w', 'z'));
