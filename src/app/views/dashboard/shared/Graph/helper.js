import * as d3 from "d3";
export function Draw(path, line, data, translate, DrawGraph) {
    path
        .datum(data)
        .attr("d", line)
    path
        .attr("transform", null)
        .transition()
        .ease(d3.easeLinear)
        .duration(1000)
        .attr("transform", `translate(${translate})`)
        .on("end", () => { if (DrawGraph) DrawGraph() })
}